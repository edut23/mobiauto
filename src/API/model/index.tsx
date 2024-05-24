const getModel = async (brand: string) => {

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`);
    
    const options = await response.json();

    return options.modelos;
}

export default getModel;