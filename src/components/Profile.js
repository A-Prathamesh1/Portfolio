export default function Profile() {
        const user = { firstName: 'Prathamesh', lastName: 'Ausekar', age: 30 };
        return (
                <>
                        <h1>HI, I am {user.firstName + ' ' + user.lastName}</h1>
                        <img src="Prathamesh.JPG" alt="prat_img"></img>
                        <br />
                        prathamesh.ausekar1@gmail.com
                        <br />
                        Cell: +91 9518347599{' '}
                        <a href="http://www.github.com/A-Prathamesh1">
                                Git
                        </a>{' '}
                        <a href="https://www.linkedin.com/in/p-a123/">
                                LinkedIn
                        </a>
                </>
        );
}
