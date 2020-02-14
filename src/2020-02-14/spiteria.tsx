import {render} from 'react-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

//material UI
export const NewReleaseCarouselComponent = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [newReleases, setNewReleases] = useState([])

  useEffect(() => {
    async function fetch() {
      const data = require(`./spiteria-data.json`)
      setNewReleases(data.results)
    }

    fetch()
  }, [])

  const next = () => {
    if (animating) return
    const nextIndex =
      activeIndex === newReleases.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex =
      activeIndex === 0 ? newReleases.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex: any) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = newReleases.map((release: any) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={release.id}
        slide={true}
      >
        <img src="/images/Resume_Cover_Photo.jpg" alt={release.overview} />
        <CarouselCaption
          captionText={release.overview}
          captionHeader={release.title}
        />
      </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      slide={true}
    >
      <CarouselIndicators
        items={newReleases}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

const App = () => <NewReleaseCarouselComponent />

const rootElement = document.getElementById('root')
render(<App />, rootElement)
