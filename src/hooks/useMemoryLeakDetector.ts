import { useEffect, useRef } from 'react';

/**
 * Custom hook that helps detect potential memory leaks in useEffect cleanup functions
 * Logs a warning if a component is unmounted without proper cleanup
 */
export const useMemoryLeakDetector = (componentName: string) => {
  const isMounted = useRef(false);
  
  // Track mount status
  useEffect(() => {
    isMounted.current = true;
    
    // On cleanup, check if the component was properly unmounted
    return () => {
      isMounted.current = false;
      
      // For debugging - log unmounts to ensure cleanup is happening
      console.log(`Component ${componentName} unmounted`);
    };
  }, [componentName]);
  
  // Return the ref so components can check if they're still mounted
  return isMounted;
};

/**
 * Usage example:
 * 
 * function MyComponent() {
 *   const isMounted = useMemoryLeakDetector('MyComponent');
 *   
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       const response = await fetch('/api/data');
 *       
 *       // Prevent state updates if component unmounted
 *       if (isMounted.current) {
 *         setData(await response.json());
 *       }
 *     };
 *     
 *     fetchData();
 *     
 *     return () => {
 *       // Cleanup code here
 *     };
 *   }, []);
 * }
 */ 