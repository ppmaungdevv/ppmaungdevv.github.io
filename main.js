import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// animation for progress bar at the top
const scroll_tracker = document.querySelector(".scroll-tracker")

const scroll_tracking_timeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientaiton: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scroll_tracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)']
    },
    {
        duration: 1,
        timeline: scroll_tracking_timeline
    }
)

// scroll animation for <section></section> tags
const sections = document.querySelectorAll("section")

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-50px"
}

const obs_1 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // entry.target.classList.remove("opacity-100")
            return;
        }
        entry.target.classList.add("opacity-100")
    })
}, options)

sections.forEach(section => {
    obs_1.observe(section)  
})
