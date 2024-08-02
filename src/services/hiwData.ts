export default async function getHiw ()  {
    
    const responce = await fetch(`https://a912654b4478639c.mokky.dev/hiw`)
    
        if(!responce.ok) {
            throw new Error('EROORO')
        }
    
        return await responce.json()
}