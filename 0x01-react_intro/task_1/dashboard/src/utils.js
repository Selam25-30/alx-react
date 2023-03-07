export const getFullYear = () => Date().getFullYear;
export const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' :
    'Holberton School main dashboard';
};
