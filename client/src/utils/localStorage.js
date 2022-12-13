export const getSavedAdIds = () => {
    const savedAdIds = localStorage.getItem('saved_ads')
      ? JSON.parse(localStorage.getItem('saved_ads'))
      : [];
  
    return savedAdIds;
  };
  
  export const saveAdIds = (adIdArr) => {
    if (adIdArr.length) {
      localStorage.setItem('saved_adds', JSON.stringify(adIdArr));
    } else {
      localStorage.removeItem('saved_ads');
    }
  };
  
  export const removeAdId = (adId) => {
    const savedAdIds = localStorage.getItem('saved_ads')
      ? JSON.parse(localStorage.getItem('saved_ads'))
      : null;
  
    if (!savedAdIds) {
      return false;
    }
  
    const updatedSavedAdIds = savedAdIds?.filter((savedAdId) => savedAdId !== adId);
    localStorage.setItem('saved_ads', JSON.stringify(updatedSavedAdIds));
  
    return true;
  };
  
