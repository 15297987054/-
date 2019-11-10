import { GET_NEW_LIST } from "@actions/discoverlist";
export const mapStateToProps = (state) => ({
    disnewlist: state.discoverlist.disnewlist,
    disinfo:state.discoverlist.disinfo,
    disnewstr:state.discoverlist.disnewstr,
})
export const mapDisPathToProps = (dispatch) => ({
  async handledisnewlist(str) {
     let data= dispatch(GET_NEW_LIST(str));
       return data;
    }
})