/* 页面跳转函数 */
function gotoPage(newUrl) {
    window.location.href = newUrl;
}

/* 检查是否不在iframe中 */
if(self == top){
    gotoPage("index.html");
}

/* 字根数据 */
zigen2zimu = {'一': 'g', '丁': 'g', '丂': 'g', '七': 'g', '丄': 'g', '丅': 'g', '丐': 'f', '丑': 'f', '丒': 'f', '专': 'f', '且': 'f', '丕': 'f', '世': 'f', '丗': 'f', '丘': 'f', '丙': 'f', '丠': 'd', '両': 'd', '丢': 'd', '丣': 'd', '两': 'd', '严': 'd', '並': 'd', '丧': 'd', '丨': 'd', '丩': 'd', '个': 'd', '丫': 'd', '丰': 's', '丱': 's', '串': 's', '丳': 's', '乀': 'a', '乁': 'a', '乂': 'a', '乃': 'a', '乄': 'a', '久': 'a', '乆': 'a', '乇': 'a', '么': 'a', '义': 'a', '乊': 'a', '之': 'a', '乌': 'a', '乍': 'a', '乐': 'h', '乑': 'h', '乒': 'h', '乓': 'h', '乔': 'h', '乕': 'h', '乖': 'h', '乗': 'h', '乘': 'h', '乙': 'h', '乚': 'h', '习': 'j', '乡': 'j', '乢': 'j', '乣': 'j', '乤': 'j', '乥': 'j', '书': 'j', '乧': 'j', '乨': 'j', '买': 'k', '乱': 'k', '乲': 'k', '亀': 'l', '亁': 'l', '亂': 'l', '亃': 'l', '亄': 'l', '亅': 'l', '了': 'l', '亇': 'l', '予': 'l', '争': 'l', '亊': 'l', '亐': 'm', '云': 'm', '互': 'm', '亓': 'm', '五': 'm', '井': 'm', '亖': 'm', '亗': 'm', '亠': 't', '亡': 't', '亢': 't', '亣': 't', '交': 't', '亥': 't', '亦': 't', '产': 't', '亨': 't', '亰': 'r', '亱': 'r', '亲': 'r', '亳': 'r', '亴': 'r', '亵': 'r', '亶': 'r', '亷': 'r', '亸': 'r', '亹': 'r', '什': 'e', '仁': 'e', '仂': 'e', '仃': 'e', '仄': 'e', '仅': 'e', '仆': 'e', '仇': 'e', '仈': 'e', '仉': 'e', '今': 'e', '介': 'e', '仌': 'e', '仐': 'w', '仑': 'w', '仒': 'w', '仓': 'w', '仔': 'w', '仠': 'q', '仡': 'q', '仢': 'q', '代': 'q', '令': 'q', '以': 'q', '仦': 'q', '仧': 'q', '仨': 'q', '仩': 'q', '仪': 'q', '仫': 'q', '们': 'q', '仭': 'q', '仮': 'q', '仰': 'y', '仱': 'y', '仲': 'y', '仳': 'y', '仴': 'y', '仵': 'y', '件': 'y', '价': 'y', '仸': 'y', '仹': 'y', '伀': 'u', '企': 'u', '伂': 'u', '伃': 'u', '伄': 'u', '伅': 'u', '伆': 'u', '伇': 'u', '伈': 'u', '伉': 'u', '伊': 'u', '伋': 'u', '伌': 'u', '伐': 'i', '休': 'i', '伒': 'i', '伓': 'i', '伔': 'i', '伕': 'i', '伖': 'i', '众': 'i', '优': 'i', '伙': 'i', '会': 'i', '估': 'p', '伱': 'p', '伲': 'p', '伳': 'p', '伴': 'p', '伵': 'p', '佀': 'n', '佁': 'n', '佂': 'n', '佃': 'n', '佄': 'n', '佅': 'n', '但': 'n', '佇': 'n', '佈': 'n', '佉': 'n', '佊': 'n', '佋': 'n', '佌': 'n', '位': 'n', '低': 'n', '住': 'n', '佐': 'n', '佑': 'n', '佒': 'n', '体': 'n', '佔': 'n', '何': 'n', '佖': 'n', '你': 'b', '佡': 'b', '佢': 'b', '佣': 'b', '佤': 'b', '佥': 'b', '佦': 'b', '佧': 'b', '佨': 'b', '佩': 'b', '佪': 'b', '佫': 'b', '佬': 'b', '佭': 'b', '佰': 'v', '佱': 'v', '佲': 'v', '佳': 'v', '佴': 'v', '併': 'v', '佶': 'v', '佷': 'v', '侀': 'c', '侁': 'c', '侂': 'c', '侃': 'c', '侄': 'c', '侅': 'c', '侐': 'x', '侑': 'x', '侒': 'x', '侓': 'x', '侔': 'x', '侕': 'x', '侖': 'x', '侗': 'x'};

zimu2zigen = {'g': '一丁丂七丄丅', 'f': '丐丑丒专且丕世丗丘丙', 'd': '丠両丢丣两严並丧丨丩个丫', 's': '丰丱串丳', 'a': '乀乁乂乃乄久乆乇么义乊之乌乍', 'h': '乐乑乒乓乔乕乖乗乘乙乚', 'j': '习乡乢乣乤乥书乧乨', 'k': '买乱乲', 'l': '亀亁亂亃亄亅了亇予争亊', 'm': '亐云互亓五井亖亗', 't': '亠亡亢亣交亥亦产亨', 'r': '亰亱亲亳亴亵亶亷亸亹', 'e': '什仁仂仃仄仅仆仇仈仉今介仌', 'w': '仐仑仒仓仔', 'q': '仠仡仢代令以仦仧仨仩仪仫们仭仮', 'y': '仰仱仲仳仴仵件价仸仹', 'u': '伀企伂伃伄伅伆伇伈伉伊伋伌', 'i': '伐休伒伓伔伕伖众优伙会', 'o': '传伡伢伣伤伥', 'p': '估伱伲伳伴伵', 'n': '佀佁佂佃佄佅但佇佈佉佊佋佌位低住佐佑佒体佔何佖', 'b': '你佡佢佣佤佥佦佧佨佩佪佫佬佭', 'v': '佰佱佲佳佴併佶佷', 'c': '侀侁侂侃侄侅', 'x': '侐侑侒侓侔侕侖侗'}

/* 用户类 */
function User(){
    this.getName = function() {
        if (this.name == undefined) {
            this.name = localStorage.name;
        }
        return this.name;
    };
    this.setName = function(newName) {
        this.name = newName;
        localStorage.name = newName;
    };
    this.getQQ = function() {
        if (this.qq == undefined) {
            this.qq = localStorage.qq;
        }
        return this.qq;
    };
    this.setQQ = function(newQQ) {
        this.qq = newQQ;
        localStorage.qq = newQQ;
    };
    this.getLevel = function() {
        // 取当前关卡
        var level = localStorage.level;
        if (level == undefined) {
            return 1;
        } else {
            return level;
        }
    };
    this.addLevel = function() {
        // 进入到下一关
        localStorage.level = this.getLevel() + 1;
    };
    this.getTimes = function() {
        // 取训练总次数
        var times = localStorage.times;
        if (times == undefined) {
            return 0;
        } else {
            return times;
        }
    };
    this.addTimes = function() {
        // 给训练总次数加 1
        localStorage.times = this.getTimes() + 1;
    };
    this.getDuration = function() {
        // 取训练总时长（单位：秒）
        var duration = localStorage.duration;
        if (duration == undefined) {
            return 0;
        } else {
            return duration;
        }
    };
    this.addDuration = function(newDuration) {
        // 给取训练总时长增加值（单位：秒）
        localStorage.duration = this.getDuration + newDuration;
    };
    this.isNewMember = function() {
        if (this.getName() == undefined) {
            return true;
        } else {
            return false;
        }
    };
    this.getAvatar = function() {
        // 返回用户头像的 url
        var qq = this.getQQ();
        if (qq != undefined) {
            return "http://q.qlogo.cn/headimg_dl?dst_uin=+" + qq +  " &spec=640&img_type=jpg";
        } else {
            return "statics/img/avatar.jpg"
        }
    }
    this.suicide = function(){
        // 自杀，即清除所有数据
        this.name = undefined;
        this.qq = undefined;
        localStorage.clear();
    };
}

user = new User();
