export const getFullYear = () => Date().getFullYear;

export const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' :
    'Holberton School main dashboard';
};

export const getLatestNotification = () => {
    return {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
    };
}