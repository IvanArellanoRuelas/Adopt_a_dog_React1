// rfc
/* eslint-disable react/prop-types */
import Tags from './Tags';
export default function MyCard({
  src,
  name = 'Sin Nombre',
  desc = '',
  Texto = 'Adopta',
  color = 'primary',
}) {
  return (
    <>
      <div id="carta">
        <img width={'200px'} src={src} alt="" />
        <h3>{name}</h3>
        <p>{desc}</p>
        <Tags Texto={Texto} color={color}></Tags>
      </div>
    </>
  );
}
