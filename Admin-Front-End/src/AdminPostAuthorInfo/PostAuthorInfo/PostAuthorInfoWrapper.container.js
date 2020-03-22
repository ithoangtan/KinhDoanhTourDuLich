import React, { Component } from "react";

import TopBarContainer from "../../AdminParentContainer/topBar.container";
import CkEditorAuthorInfo from "./PostAuthorInfo.ckEditor";
import FooterContainer from "../../AdminParentContainer/footer.Container";
import { Spin } from "antd";

export default class ContentTableWrapperContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true
      };
   }

   loaded = () => {
      this.setState(props => {
         return {
            loading: false
         };
      });
   };

   render() {
      const { general } = this.props;
      return (
         <div id="content-wrapper" className="d-flex flex-column">
            {/* Topbar */}
            <TopBarContainer {...this.props} />
            {/* End of Topbar */}
            {/* Main Content */}
            <Spin
               tip="loading... author info post"
               spinning={this.state.loading}
            >
               <CkEditorAuthorInfo
                  {...this.props}
                  general={general}
                  loaded={this.loaded}
               />
            </Spin>
            {/* End of Main Content */}
            {/* Footer */}
            <FooterContainer />
            {/* End of Footer */}
         </div>
      );
   }
}
