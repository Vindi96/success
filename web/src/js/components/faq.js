export default () => {
    const faqItems = document.querySelectorAll('.faq__item');
  
    if (faqItems.length > 0) {
      faqItems.forEach(item => {
        const content = item.querySelector('.faq__answer'); 
  
        item.addEventListener('click', () => {
          const isActive = item.classList.contains('is-active');
  
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('is-active');
              const otherContent = otherItem.querySelector('.faq__answer');
              otherContent.style.height = '0';
            }
          });
  
          item.classList.toggle('is-active');
          
          if (isActive) {
            content.style.height = '0';
          } else {
            const contentHeight = content.scrollHeight; 
            content.style.height = `${contentHeight}px`;
          }
        });
      });
    }
  }
  