import Badge from 'react-bootstrap/Badge';
/* eslint-disable react/prop-types */
function Tags({ Texto = 'Adopta', color = 'primary' }) {
  return (
    <Badge pill bg={color}>
      {Texto}
    </Badge>
  );
}

export default Tags;
