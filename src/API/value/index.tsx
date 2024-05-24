const getPrice = async (brand: string, model: string, year: string) => {

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`);
    
    const options = await response.json();

    return options;
}

export default getPrice;