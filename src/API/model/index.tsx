const getModel = async (model: string) => {

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${model}/modelos`);
    
    const options = await response.json();

    return options.modelos;
}

export default getModel;