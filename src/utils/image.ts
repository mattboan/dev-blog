import { Buffer } from 'buffer';

// This function converts a base64 string to a file object
export const base64ToImageFile = (file: string) => {
    let fileType = '';
    let mimeType = '';

    try {
        // Get the file type
        fileType = file.split(';')[0].split('/')[1];
        mimeType = file.split(';')[0].split(':')[1];
    } catch (err) {
        console.error(err);
        return null;
    }

    // Create the file name
    const fileName = `featured-image.${fileType}`;

    const base64 = file.split(',')[1];
    const buffer = Buffer.from(base64, 'base64');
    const blob = new Blob([buffer], { type: mimeType });
    return new File([blob], fileName, { type: mimeType });
};
