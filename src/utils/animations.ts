
// Animation utility functions

/**
 * Creates a staggered animation delay for a list of elements
 * @param index The index of the current element
 * @param baseDelay The base delay in milliseconds
 * @param stagger The stagger amount in milliseconds
 * @returns A CSS delay value in seconds
 */
export const staggerDelay = (index: number, baseDelay = 0, stagger = 100): string => {
  const delayMs = baseDelay + index * stagger;
  return `${delayMs / 1000}s`;
};

/**
 * Handles the intersection observer for animating elements when they enter the viewport
 * @param element The DOM element to observe
 * @param callback Function to call when the element enters the viewport
 * @param threshold The visibility threshold (0-1)
 * @param rootMargin Margin around the root element
 * @returns A cleanup function to disconnect the observer
 */
export const observeElement = (
  element: Element,
  callback: (entry: IntersectionObserverEntry) => void,
  threshold = 0.1,
  rootMargin = '0px'
): () => void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );
  
  observer.observe(element);
  return () => observer.disconnect();
};

/**
 * Adds a class to an element when it enters the viewport
 * @param element The DOM element to observe
 * @param className The class to add
 * @param threshold The visibility threshold (0-1)
 * @returns A cleanup function to disconnect the observer
 */
export const addClassOnScroll = (
  element: Element,
  className: string,
  threshold = 0.1
): () => void => {
  return observeElement(
    element,
    (entry) => {
      entry.target.classList.add(className);
    },
    threshold
  );
};

/**
 * Creates a parallax effect based on mouse movement
 * @param element The element to apply the parallax effect to
 * @param speed The speed factor of the parallax effect
 * @param container The container element (default: window)
 * @returns A cleanup function to remove event listeners
 */
export const createParallaxEffect = (
  element: HTMLElement,
  speed: number,
  container?: HTMLElement
): () => void => {
  const handleMouseMove = (e: MouseEvent) => {
    if (!element) return;
    
    const containerRect = container 
      ? container.getBoundingClientRect() 
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
    
    const x = (e.clientX - containerRect.left) / containerRect.width;
    const y = (e.clientY - containerRect.top) / containerRect.height;
    
    const offsetX = (x - 0.5) * speed;
    const offsetY = (y - 0.5) * speed;
    
    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };
  
  const targetElement = container || window;
  targetElement.addEventListener('mousemove', handleMouseMove as EventListener);
  
  return () => {
    targetElement.removeEventListener('mousemove', handleMouseMove as EventListener);
  };
};
