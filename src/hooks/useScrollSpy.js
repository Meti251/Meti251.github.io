import { useEffect, useState } from 'react';

export default function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] || '');

  useEffect(() => {
    const els = (sectionIds || [])
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin: options.rootMargin ?? '-35% 0px -35% 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds), options.rootMargin]);

  return activeId;
}
