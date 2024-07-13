import { useNavigate } from 'react-router-dom';

const pages = [
  '/profile',
  '/language-selection',
  '/level-selection',
  '/exercise',
  '/progress',
];

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToNext = (currentPath) => {
    const currentIndex = pages.indexOf(currentPath);
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const goToPrevious = (currentPath) => {
    const currentIndex = pages.indexOf(currentPath);
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return { goToNext, goToPrevious };
};
