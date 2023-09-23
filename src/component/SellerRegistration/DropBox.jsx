import { useDropzone } from 'react-dropzone';
import {FaImage} from "react-icons/fa"






function DropBox({ onDrop }) {
	const {
	 	getRootProps,
		getInputProps,
		open,
		isDragAccept,
		isFocused,
		isDragReject,
	} = useDropzone({
		accept: 'image/*',
		onDrop,
		noClick: true,
		noKeyboard: true,
	});

	

	return (
		<>
			{' '}
			<section className="border-2 border-dashed  w-56 h-32">
			<button type="button" onClick={open}
                    >
						
				<div
					className="dropbox"
					{...getRootProps({ isDragAccept, isFocused, isDragReject })}
				>
					<input {...getInputProps()} />
                    <div className=' opacity-40 flex justify-center'><FaImage/></div>
					<p className=' font-bold pb-2 px-4 rounded cursor-pointer'>Drag and drop document here<br></br><span className='flex justify-center'>OR</span></p>
					
					<span className="text-blue-500 hover:text-blue-700  font-bold pb-2 px-4 rounded cursor-pointer">
					Click to select Image</span>
                </div>
				</button>
			</section>
			
		</>
	);
}

export default DropBox;