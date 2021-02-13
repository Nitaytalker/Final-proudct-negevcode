

function HomePage(props) {
    function HeadHome(props) {
        return (
            <div>
                <h1>{props.shopname}</h1>
                
            </div>

        )
    }

    return (
        <div className='homepage'>
            <HeadHome shopname={props.shopname}/>

        </div>
    )
}


export default HomePage;