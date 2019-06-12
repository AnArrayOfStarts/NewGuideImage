/**
 * desc：空
 * author：lixiaolong
 * date: 2019/6/12
 *
 * * * * * * * * * * * * * * * * * * *
 * Function:
 *
 *
 *
 *
 *
 * * * * * * * * * * * * * * * * * * *
 */

/**----------------------------------------------------------------*/
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, UIManager, Dimensions,
    Image
} from 'react-native';
import PropTypes from "prop-types";
import {ifIphoneX} from "react-native-iphone-x-helper/index";

/**----------------------------------------------------------------*/
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;


export default class showGuidePage extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            showGuideImage:false,                // 是否要展示
            marginTopNumber:0,                   // 距离顶部距离
        };
    };

    /*-------------------------生命周期-------------------------*/
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /*-------------------------API请求-------------------------*/
    /*-------------------------事件----------------------------*/
    /**
     * 获取位置信息
     * @param e
     */
    layout(e) {
        UIManager.measure(e.target, (x, y, width, height, left, top) => {

            // console.warn('x:'+x)
            //
            // console.warn('y:'+y)
            //
            // console.warn('width:'+width)
            //
            // console.warn('height:'+height)
            //
            // console.warn('left:'+left)
            //
            // console.warn('top:'+top)
            // this.timer = setTimeout(() => {
            //
            // this.setState({
            //     marginTopNumber: top
            // })
            //
            // },100);

            // 获取到位置，然后展示引导界面
            this.setState({
                marginTopNumber: top,
                showGuideImage:true
            })
            // console.log('x:',x,'y:',y);
            // modalTemp.show();

        })
    }

    /*-------------------------回调函数------------------------*/
    /*-------------------------子视图--------------------------*/
    /**
     * 主界面展示内容
     * @returns {*}
     */
    showCenterView(){
        return (
            <View style={{flex:1}}>
                <View style={styles.changeViewStyles}>
                    <View style={[styles.itemViewStyles,{borderBottomWidth:1,
                        borderBottomColor:'orange',}]}>
                        <Text>左</Text>
                    </View>
                    <View style={{width:1, height:40,backgroundColor:'orange'}}/>
                    <View style={[styles.itemViewStyles,{borderBottomWidth:1,
                        borderBottomColor:'orange',}]}
                          onLayout={({nativeEvent:e})=>this.layout(e)}
                    >
                        <Text>圆圈</Text>
                    </View>
                </View>
                <View style={styles.itemViewStyles}>
                    <Text onPress={() =>{
                        this.setState({
                            showGuideImage: true
                        })
                    }}>点我再次显示</Text>

                </View>
            </View>
        );
    }

    /**
     * 引导界面展示
     * @returns {*}
     */
    showTouchView(){
        return (
            <TouchableOpacity style={{position:'absolute',width:screenW, height:screenH}} onPress={() =>{
                this.setState({
                    showGuideImage: false
                })
            }}>
                <View style={{height:this.state.marginTopNumber,width:screenW,backgroundColor:'black',opacity:0.5}}/>
                <Image source={require('./assets/img-guidance-friendcircle.png')} style={{width:screenW, height:(screenW/3 * 2)}}/>
                <View style={{flex:1,backgroundColor:'black',opacity:0.5}}/>
            </TouchableOpacity>
        );
    }

    /*-------------------------主视图--------------------------*/
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerStyles}>
                    <Text style={styles.titleTextStyles}>假装有个导航</Text>
                </View>

                {/* 主要展示内容 */}
                {this.showCenterView()}

                {/* 是否要展示引导页 */}
                {this.state.showGuideImage && this.showTouchView()}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    headerStyles:{
        backgroundColor:'#FFFFFF',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width:screenW,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        ...ifIphoneX({
            height: 84
        }, {
            paddingTop: 64
        })
    },
    titleTextStyles:{
        marginBottom:10,
        fontSize:24,
        color:'black'
    },
    changeViewStyles:{
        width:screenW,
        height:40,
        flexDirection:'row',
        backgroundColor:'#FFFFFF'
    },
    itemViewStyles:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
});
