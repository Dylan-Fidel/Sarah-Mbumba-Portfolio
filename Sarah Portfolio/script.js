/* ============================================================
   REVEL FOX & PARTNERS — script.js
   Handles sidebar filter link active states
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Filter links (category & timeline) ── */
  const filterLinks = document.querySelectorAll('.filter-link');

  filterLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      /* Find the group this link belongs to (its parent ul) */
      const parentUl = link.closest('ul');

      /* Remove active from siblings in the same group */
      parentUl.querySelectorAll('.filter-link').forEach(function (sibling) {
        sibling.classList.remove('active');
      });

      /* Toggle: if clicking the already-active link, deactivate it */
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      } else {
        link.classList.add('active');
      }

      /*
       * ── TO-DO: Add your real filter logic here ──
       * The data-filter attribute on each link tells you which
       * category or decade was selected, e.g.:
       *
       *   const filter = link.dataset.filter;
       *   // show/hide .project-card elements based on their data attributes
       */
    });
  });

});
