export const get404Page = (req, res, next) => {
  res.status(404).render('not-found', { pageTitle: 'Not Found', path: '' });
};
