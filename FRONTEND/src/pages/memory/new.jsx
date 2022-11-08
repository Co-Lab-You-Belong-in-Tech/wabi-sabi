import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import { useRouter } from 'next/router';
import { VscClose, VscCheck, VscAdd } from 'react-icons/vsc';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BsHeartFill, BsHeart, BsCheckCircle } from 'react-icons/bs';
import AppLayout from '../../components/Layouts/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { CreateMemory, getAllMemories } from '../../redux/features/memory/memorySlice';

function NewMemory() {
  // handle image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // state variables for the memory entry
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const prompt = "What's one thing you are grateful for today?";

  // keep track of the character count for the story and handle alerts
  const [storyCount, setStoryCount] = useState(0);
  const [alert, setAlert] = useState({
    type: '',
    message: '',
    show: false,
  });

  // add a reference to the actual file input field
  const uploadButton = useRef(null);
  const clickUploadButton = () => {
    uploadButton.current.click();
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    if (selectedFile.size > 10000000) {
      setAlert({
        type: 'Error:',
        message: 'Please upload a file less than 10MB.',
        show: true,
      });
      setSelectedFile(null);
      return;
    }
    
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(selectedFile.name)) {
      setAlert({
        type: 'Error:',
        message: 'Please upload a JPEG or PNG file.',
        show: true,
      });
      setSelectedFile(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setSelectedFile(e.target.files[0] || undefined);
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const submitMemory = () => {
    // prevent default behavior if some fields don't meet the requirements
    if (storyCount < 100) {
      setAlert((prevState) => ({
        ...prevState,
        type: 'Required:',
        message: 'Your story must be at least 100 characters long.',
        show: true,
      }));
      return;
    }
    if (!title) {
      setAlert((prevState) => ({
        ...prevState,
        type: 'Required:',
        message: 'You need to add a title for your memory.',
        show: true,
      }));
      return;
    }
    if (!selectedFile) {
      setAlert((prevState) => ({
        ...prevState,
        type: 'Required:',
        message: 'You need to add an image for your memory.',
        show: true,
      }));
      return;
    }
    // send the data to the backend
    const formData = new FormData();
    formData.append('api_v1_memory[title]', title);
    formData.append('api_v1_memory[story]', story);
    formData.append('api_v1_memory[favorite]', favorite);
    formData.append('api_v1_memory[public]', isPublic);
    formData.append('api_v1_memory[image]', selectedFile);
    formData.append('api_v1_memory[prompt]', prompt);

    dispatch(CreateMemory(formData))
      .unwrap()
      .then(() => {
        setAlert((prevState) => ({
          ...prevState,
          type: <BsCheckCircle />,
          message: 'Memory saved successfully.',
          show: true,
        }));
        dispatch(getAllMemories());
        setTimeout(() => {
          router.push('/memories');
        }, 2000);
      })
      .catch(() => {
        setAlert((prevState) => ({
          ...prevState,
          type: 'Error:',
          message: "Couldn't save your memory.",
          show: true,
        }));
      });
  };

  const { back } = useRouter();

  const { loading } = useSelector((state) => state.memory);
  return (
    <AppLayout renderNav={false}>
      <div className="relative">
        <main className="bg-[#F7F7F9] md:pt-20">
          <div className="relative max-w-[621px] min-h-screen pb-4 mx-auto bg-white">
            <nav className="flex items-center justify-between w-full p-4 text-2xl sm:text-5xl">
              <button type="button" onClick={back}>
                <VscClose />
              </button>
              <span className="text-base leading-6 uppercase sm:text-2xl sm:px-6">
                {moment().format('ddd ll')}
              </span>
              {!loading && (<button
                onClick={submitMemory}
                type="button"
                name="submit memory entry"
                className="text-2xl bg-transparent border-0 cursor-pointer sm:text-5xl"
              >
                <VscCheck />
              </button>)}
              {
                loading && <AiOutlineLoading3Quarters className="text-2xl animate-spin sm:text-5xl" />
              }
            </nav>

            <form className="flex flex-col">
              <div className="bg-[#EDEDED] h-80 sm:h-[427px] flex justify-center items-center relative">
                <label htmlFor="image" className="sr-only">
                  Upload Image
                </label>
                <input
                  id="image"
                  type="file"
                  name="image"
                  onChange={onSelectFile}
                  ref={uploadButton}
                  className="hidden"
                />
                {preview && (
                  <>
                    <Image
                      src={preview}
                      className="absolute"
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                      alt="memory media"
                    />
                    <button
                      type="button"
                      className="absolute bg-white rounded-md bottom-2 right-2 p-0.5"
                      onClick={() => setSelectedFile(null)}
                    >
                      Change photo
                    </button>
                  </>
                )}
                <button
                  id="upload-icon"
                  className="bg-[#C0C0C0] sm:p-8 p-6 border-0 flex justify-center items-center cursor-pointer"
                  type="button"
                  onClick={clickUploadButton}
                >
                  <VscAdd className="text-5xl text-white sm:text-6xl" />
                </button>
              </div>

              <div className="mx-6 border-0 border-[#EDEDED] border-b-2 pt-4 pb-2 border-solid sm:mx-20">
                <label htmlFor="title" className="sr-only">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="text-2xl font-bold text-center border-0 sm:text-5xl placeholder:text-2xl sm:placeholder:text-5xl placeholder:ml-[45%] placeholder:mr-[45%] placeholder:tracking-wider w-full placeholder:text-[#CECECE]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between mx-6 border-[#EDEDED] border-b-2 py-4 border-solid border-0 items-center sm:mx-20 sm:order-last sm:justify-end sm:gap-x-10 sm:border-0 sm:p-0">
                <button type="button" onClick={() => setFavorite(!favorite)}>
                  {favorite ? (
                    <BsHeartFill className="text-2xl text-red-600 sm:text-3xl" />
                  ) : (
                    <BsHeart className="text-2xl sm:text-3xl" />
                  )}
                </button>
                <div className="flex items-center gap-x-2">
                  <p className="text-xl">Share with public</p>
                  <button
                    type="button"
                    className="relative w-4 h-4 bg-white border-black border-[1px]"
                    onClick={() => setIsPublic(!isPublic)}
                  >
                    {isPublic && (
                      <VscCheck className="absolute bottom-[-2px] text-5xl text-green-500 left-[-6px]" />
                    )}
                  </button>
                </div>
              </div>

              <div className="px-5 py-2 m-6 text-lg font-medium bg-white sm:mx-20 shadow-box rounded-xl">
                <p>{prompt}</p>
              </div>

              <div className="mx-6 sm:mx-20">
                <label htmlFor="description" className="sr-only">
                  Story
                </label>
                <textarea
                  name="story"
                  id="story"
                  placeholder="Share your story.."
                  className="w-full mx-auto text-xl font-medium min-h-[200px] max-h-max border-0 outline-none placeholder:text-base px-5"
                  onChange={(e) => {
                    setStoryCount(e.target.value.length);
                    setStory(e.target.value);
                  }}
                  value={story}
                  required
                />
                <p className="text-lg font-semibold">
                  <span className={storyCount < 100 ? 'text-red-500' : 'text-green-500'}>
                    {storyCount}
                  </span>
                  /100
                </p>
              </div>
            </form>
            {alert.show && (
              <div className="absolute z-10 bottom-0 flex items-start justify-center w-full max-w-2xl min-h-full mx-auto bg-[#CCC] bg-opacity-75">
                <div className="relative flex flex-col items-center w-full px-4 pt-6 pb-3 mx-8 text-center bg-white max-w-max mt-60 rounded-2xl animate-shake">
                  <button
                    type="button"
                    className="absolute text-3xl bg-transparent border-0 cursor-pointer right-2 top-1"
                    onClick={() => setAlert({})}
                  >
                    <VscClose />
                  </button>
                  <span className={`mb-2 text-center text-2xl font-bold ${alert.type !== <BsCheckCircle /> ? 'text-red-500' : 'text-green-500'}`}>{alert.type}</span>
                  <p className="text-lg font-medium">{alert.message}</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </AppLayout>
  );
}

export default NewMemory;
