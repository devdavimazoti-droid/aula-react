function UserProfile(){
    const nome = 'Mazoti' ;
    const idade = 19;

    return(
        <div>
            <h1>{nome}</h1>
            <p>Sua idade é {idade}</p>
            <p>{idade >= 18 ? 'Maior de idade' : 'Menor de idade'}</p>
        </div>
    );
}
export default UserProfile;