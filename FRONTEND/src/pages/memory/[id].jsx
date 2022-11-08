import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import moment from 'moment/moment';
import { VscArrowLeft, VscCheck, VscAdd, VscClose } from 'react-icons/vsc';
import { BsHeartFill, BsHeart, BsGlobe } from 'react-icons/bs';
import { GrLock } from 'react-icons/gr';
import AppLayout from '../../components/Layouts/AppLayout';
import { memory } from '../../components/data/memories';

export default function ViewMemory() {
  const [editMode, setEditMode] = useState(false);
  const [changedFiles, setChangedFiles] = useState({
    title: memory.title,
    story: memory.story,
  });
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState(memory.image_url);

  // state variables for the memory entry
  const [favorite, setFavorite] = useState(memory.favorite);
  const [isPublic, setIsPublic] = useState(memory.public);

  // keep track of the character count for the story and handle errors
  const [storyCount, setStoryCount] = useState(0);
  const [error, setError] = useState(null);

  // add a reference to the actual file input field
  const uploadButton = useRef(null);
  const clickUploadButton = () => {
    uploadButton.current.click();
  };

  useEffect(() => {
    if (preview) {
      return;
    }
    
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

    if (selectedFile.type !== 'image/jpeg' || selectedFile.type !== 'image/png') {
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

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setChangedFiles({ ...changedFiles, [name]: value });
  };

  const { title, story } = changedFiles;
  const submitMemory = () => {
    // prevent default behavior if some fields don't meet the requirements
    if (storyCount < 100) {
      setError('You need to meet 100 characters for your story.');
      return;
    }
    if (!title) {
      setError('You need to add a title for your memory.');
      return;
    }
    if (!selectedFile) {
      setError('You need to add an image for your memory.');
      return;
    }
    // send the data to the backend
    const formData = new FormData();
    formData.append('api_v1_memory[favorite]', favorite);
    formData.append('api_v1_memory[isPublic]', isPublic);
    if (selectedFile) {
      formData.append('api_v1_memory[image]', selectedFile);
    }
    // changedFiles is an object with the changed fields (title and/or story)
    for (const [key, value] of Object.entries(changedFiles)) {
      formData.append(`api_v1_memory[${key}]`, value);
    }
  };

  return (
    <AppLayout renderNav={false}>
      <main className="bg-[#F7F7F9] md:pt-20">
        <div className="relative max-w-2xl min-h-screen pb-4 mx-auto bg-white">
          <nav className="flex items-center justify-between w-full p-4 text-2xl sm:text-5xl">
            <VscArrowLeft />
            <span className="text-base leading-6 uppercase sm:text-2xl sm:px-6">
              {moment().format('ddd ll')}
            </span>
            {editMode && (
              <button
                onClick={submitMemory}
                type="button"
                name="submit memory entry"
                className="text-2xl bg-transparent border-0 cursor-pointer sm:text-5xl"
              >
                <VscCheck />
              </button>
            )}
            {!editMode && (
              <button type="button" onClick={() => setEditMode(true)}>
                <p className="text-base font-semibold leading-6 sm:text-2xl">EDIT</p>
              </button>
            )}
          </nav>

          <form className="flex flex-col">
            <div className="bg-[#EDEDED] h-80 sm:h-[427px] flex justify-center items-center relative">
              <label htmlFor="file" className="sr-only">
                Upload Image
              </label>
              <input
                id="file"
                type="file"
                name="image"
                onChange={onSelectFile}
                ref={uploadButton}
                className="hidden"
              />
              {preview && (
                <Image
                  src={preview}
                  className="absolute"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  alt="memory media"
                  priority
                />
              )}
              {editMode && (
                <>
                  <button
                    type="button"
                    className="absolute p-1 bg-white rounded-md bottom-2 right-2"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview(null);
                    }}
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
                onChange={handleChanges}
                required
                readOnly={!editMode}
              />
            </div>

            <div className="flex justify-between mx-6 border-[#EDEDED] border-b-2 py-4 border-solid border-0 items-center sm:mx-20 sm:order-last sm:justify-end sm:gap-x-10 sm:border-0 sm:p-0">
              <button type="button" onClick={() => setFavorite(!favorite)} disabled={!editMode}>
                {favorite ? (
                  <BsHeartFill className="text-2xl text-red-600 sm:text-3xl" />
                ) : (
                  <BsHeart className="text-2xl sm:text-3xl" />
                )}
              </button>
              {editMode && (
                <div className="flex items-center gap-x-2">
                  <p className="text-xl">Share with public</p>
                  <button
                    type="button"
                    className="relative w-4 h-4 bg-white border-black border-[1px]"
                    onClick={() => setIsPublic(!isPublic)}
                    disabled={!editMode}
                  >
                    {isPublic && (
                      <VscCheck className="absolute bottom-[-2px] text-5xl text-green-500 left-[-6px]" />
                    )}
                  </button>
                </div>
              )}
              {!editMode &&
                (isPublic ? (
                  <BsGlobe className="text-2xl sm:text-3xl" />
                ) : (
                  <GrLock className="text-2xl sm:text-3xl" />
                ))}
            </div>

            <div className="px-5 py-2 m-6 text-lg font-medium bg-white sm:mx-20 shadow-box rounded-xl">
              <p>{memory.prompt}</p>
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
                  handleChanges(e);
                }}
                value={story}
                required
                readOnly={!editMode}
              />
              {editMode && (
                <p className="text-lg font-semibold">
                  <span className={storyCount < 100 ? 'text-red-500' : 'text-green-500'}>
                    {storyCount}
                  </span>
                  /100
                </p>
              )}
            </div>
          </form>
          {error && (
            <div className="absolute z-10 bottom-0 flex items-start justify-center w-full max-w-2xl min-h-full mx-auto bg-[#CCC] bg-opacity-75">
              <div className="relative w-full px-4 py-6 mx-8 text-center bg-white max-w-max mt-60 rounded-2xl animate-shake">
                <button
                  type="button"
                  className="absolute text-3xl bg-transparent border-0 cursor-pointer right-2 top-1"
                  onClick={() => setError(null)}
                >
                  <VscClose />
                </button>
                <p className="mb-2 text-xl font-bold text-red-500 ">Required:</p>
                <p className="text-lg font-medium">{error}</p>
              </div>
            </div>
          )}
        </div>
        ;
      </main>
    </AppLayout>
  );
}
