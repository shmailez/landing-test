export default async function getAnswers ()  {
    
    const responce = await fetch(`https://a912654b4478639c.mokky.dev/answers`)
    
        if(!responce.ok) {
            throw new Error('EROORO')
        }
    
        return await responce.json()
}