export async function simpleGet3(url){
    try{
        const apiResult = await fetch(url).then((response)=> response.json())
        return apiResult;
    }catch (error){
        return {error: `Se ha producido un: ${error}`}
    }
}