
const upload_preset = 'Janepharmasolutions';// import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = 'jane007';// import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
    try {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", upload_preset);

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, 
            { method: "post", body: uploadData }
        );

        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error uploading image:", error);
    }
};

export default uploadImageToCloudinary;
