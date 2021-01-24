const USER = {
    accesstoken: 'd5a1e2d3-5b7b-466e-a14d-8522f4041e3d'
}

export default function user(prestate = USER, action) {
    switch (action.type) {
        default:
            return { ...prestate }
    }

}