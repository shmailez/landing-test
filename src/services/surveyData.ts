
export default async function getSurvey ()  {
    
    const responce = await fetch(`https://a912654b4478639c.mokky.dev/survey`)
    
        if(!responce.ok) {
            throw new Error('EROORO')
        }
    
        return await responce.json()
}