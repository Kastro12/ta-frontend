export const getCountryCode = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data.country_code.toLowerCase();
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
};
