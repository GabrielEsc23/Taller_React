
import football from '../imagenes1/football.jpg'; // Imagen desde src
import basketball from '../imagenes1/basketball.jpg'
import '../eslilos/deportes.css'

const SportsGallery = () => {
  return (
    <div className="galeria-deportes">
      <h2>Deportes Favoritos</h2>
      <div>
        <div>
          <img src={football} alt="Fútbol" />
          <p>Fútbol</p>
        </div>
        <div>
          <img src={basketball} alt="Básquetbol"/>
          <p>Básquetbol</p>
        </div>
        <div>
          <img src="/imagenes2/tenis.jpg" alt="Tenis"/> {/* Desde public */}
          <p>Tenis</p>
        </div>
        <div>
          <img src="/imagenes2/natacion.jpg" alt="Natación"  /> {/* Desde public */}
          <p>Natación</p>
        </div>
      </div>
    </div>
  );
};

export default SportsGallery;
