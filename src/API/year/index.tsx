const getYear = async (brand: string, model: string) => {

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`);
    
    const options = await response.json();

    return options;
}

export default getYear;