import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>

      <h1> { title } </h1>
      
      <h2>{ subtitle }</h2>
      <h2>{ subtitle }</h2>
      <h2>{ subtitle }</h2>

      <h2>{ name }</h2>

    </>
  );
};

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.number
}

FirstApp.defaultProps = {
  name : "Sin nombre",
  subtitle: 10
}

