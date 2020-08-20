const beforeEach = (to, from, next) => {
  to.meta.nextpopup = from.meta.popup && !from.meta.nextpopup

  next()
}

export default beforeEach
