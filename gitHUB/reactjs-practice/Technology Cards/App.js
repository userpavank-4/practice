import './App.css'
import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="container">
    <div className="card-container">
      <h1 className="heading">Learn 4.0 Technology</h1>
      <p className="description">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in Product Development.
      </p>
      <div className="card-list">
        <ul>
          {cardsList.map(eachCard => (
            <CardItem cardDetails={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default App
