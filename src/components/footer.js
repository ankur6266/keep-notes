
function Footer(){
    let d = new Date().getFullYear();

    return(
        <div className="footer">
            <p>Copyright &#169; {d}</p>
        </div>
    );
}

export default Footer;