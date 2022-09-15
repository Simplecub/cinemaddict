

const humanizeTime = (minutes) => {

  if (+minutes < 60) {
    return `${+minutes}m`
  } else {
    return `${Math.floor(+minutes/60)}H ${(+minutes % 60) ? `${+minutes % 60}m`: ''}`
  }
}

export {humanizeTime}
