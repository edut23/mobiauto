const getBrand = async () => {
    const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
    const options = await response.json();

    return options;
}

export default getBrand;