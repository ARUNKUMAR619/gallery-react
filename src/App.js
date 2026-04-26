import ImageCard from "./components/ImageCard";

import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";

function App() {
  const images = [
    { id: 1, url: img1, title: "Golden Horizon", description: "The sun melts into the sea" },
    { id: 2, url: img2, title: "Spring Whisper", description: "Blossoms bloom where the city breathes softly." },
    { id: 3, url: img3, title: "Sky Bloom", description: "Petals reaching for the endless blue above." },
    { id: 4, url: img4, title: "Crimson Silence", description: "A lone tree stands painted in autumn fire." },
    { id: 5, url: img5, title: "Misty Calm", description: "Mountains fade into a dreamlike horizon." },
    { id: 6, url: img6, title: "Midnight Drift", description: "The moon floats above a sea of clouds." },
    { id: 7, url: img7, title: "Soft Focus", description: "Life doesn’t need sharp edges to feel real" },
    { id: 8, url: img8, title: "Liquid Gold", description: "Light dances across restless waves." }
  ];

  return (
    <>
      <h1>Image Gallery</h1>

      <div className="gallery">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            url={img.url}
            title={img.title}
            description={img.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;