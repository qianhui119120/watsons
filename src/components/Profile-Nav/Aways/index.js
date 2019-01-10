import React,{Component} from 'react';
import './index.scss'

export default class extends Component {
    constructor(){
        super();
        this.state = {
            aways:[
                {'name':'消息','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAABIFBMVEVByK1My7H///9Iyq9Bya3o+fb+//9MaXFCyK5Cya32/PtJy7FBya77/v33/fxByKxDyK2z6d5JyrBmzMzt+vfd9e/9/v7m+PXl+PSN3s7Q8ev5/fxOy7HY8+5Hyq+j5Nhb0LdCyK942MXh9/GM3sze9vDW8u3e9fDm+PSN381ByayU4NDz+/qR38+Q38+d4tTZ9O/j9/Pm+PXw+/mn5dim5dig5NZ118Nw1sFw1cGt59y26uBKy7Fc0LlFya5e0LnM8On8/v2p5dmn5dmJ3cyN3s2Z4tNi0brI7+fB7uRo072f49WE28lPy7Pp+PXz+/ng9/FCyK2r6Nt72MXt+ffP8evj9/NQzLPI7+daz7fu+vj8/v552MRp1L616d////9x7+lOAAAAX3RSTlPMzv7NuPf+AKZt/M2w/fyRVOfOBfn0/vf23vD9z/LN49JG2PXd9PL0991H3/ve3uLy9fb55OTi2NbW5ujO0szS7/7l5Nzd4dPu69Xi28/4+/TM5dn57/bP7dH5/dnU6Lzcc4kAAAEMSURBVHja7dXFbgMxFIXhM5jOpGFmKKbMzG1S5pThvv9bVI2qJtaA7U3VRf6FpXv07Y2AVP+LJywdgulWAhYksqDLcB1/UD517A+KD5ly9yqRfeGnXx6prXVP5YTUu1tP/fFK2SqzVNKUv/TQ7zaVnsB2f01XZ64690bPZcdavaFCE84qKn3CJe2U6MCxHpJ5Dvda+0nHtlc4gle724C2MTQ1OozcnL0Q2wJ2ivArPk/fZTtvRgGnGPW2yePjDDd4PMzwMI+PMHyMx1cYPsvjymKPTsbBq27+6vQq+E2qP9qchkgzoY4ONSDWmkFExjpECy6nloLoJ9OgHI7K8CgCE5EBwSI1yb+pzz37Ai8eUGIWMwrUAAAAAElFTkSuQmCC'},
                {'name':'优惠券','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAA4VBMVEX2qDj+/Pn4rEH//vz81aH//fv//v1MaXH2qjr72632qDr2qj72qT33qjr3pjrypkD3qDn4qDr2qDn2qTn1pzr//vz2qTv+9+35qj32rUT++O/97NT5qDj0qDz1qDr//4D3pzj4qDn4tFX98uH//Pj+9OX97tj5v235w3j+8+L4r0n+8+P73LD60pj61Jz816T95sf//fr2qj///v76zIz5zY35v272qTz5z5T605z+9ef5w3f++fL86c34v2795ML/+/f4tln4u2X4tFb4rUX++fH///796tD2sEz2rkb////AvU+tAAAASnRSTlPM/c394/3+ADnnzM3NQlwUwUbErnz+zPkqzvrxKS81ApqQ0vb89vPX2vXP9uji4uTu/c3+3t/XzOHi99n78Nfs/NLV0s76/vHPz1N00asAAAEFSURBVHja7ZXJbsJQDEXdQt6jIUADSZihzNCBqaUDhdK54P//IAybIieojtQNEmfjhc/C7+pKD3Qojvpe/ZA5DyenMnI7kwJty3Wbcs8BY5J93s776R3blEhPcv0RX99pvM3wiW2SGhJp4CywUIdVC+cmW6QTEIBVxNbyBxt5kPHZwCZ+1UXuOB63Ppr4/fLgeSZw+O1F3EH1+e08meHIMCIRhbeuq5Rxw5Oh3AOI4hkQAbnbct3W/s6Yp8QAr+nFlr8zvJGXBfyl5/1V3/zVCeGi2ry4bYIP+e2EE0InWTty3aEgy3K9THpFrlc0VGtBeifbBT+1KlyAHJIPmVgojj/fP+lrixYuwCRkRyUAAAAASUVORK5CYII='},
                {'name':'我的拼团','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAC+lBMVEU8oOn///////8+oOn///+33Pb///9MaXE9oek8oOn///+w2fex2fez2vc+oek7oOm22/Y8oOg8oOn///93vO////+43Pc/oen///9Goug9oelVqv8/o+pLpeI+oeo9oepCpOc8oOk8oOi12/b////g7/s8oOn///////9gsew9oelRqus8oOk8oOj///87oOm43fdFpev////////////2+/48oehAoer///9ktO5Boun9/v////////9mte6SyvLO6Pr///91vPC/4Pf+/v9Hpur////v+P38/f////////+Lx/H///////+o1Pa02/b4/P88oOhFo+rW6/rE4vhtt+/n9P1is+7w9/3////n9Pz///////////////+r1vVOsf88oeo+ouo9pO08oeo+oelBous9oeg9oek9oepDrvI9oOlAo+o9oOo8n+lgv/88oOlVquo+o+s9oOlAn+w8oOk+pO08n+jb7vw/oel/wfFIpur///+q1fX///////+Ty/PL5fr5/P7///////////////9Zruz///////8+ouum1PT///////////88oOmh0fW33Pis1/Wj0vX///////+73vf////////P6Pro9f3X7Pr///+x2fb////M5vlBouw9oemHxfK93vjA4Pnf7vtpte2h0fT///+23Pc8oOji8fz///+93/iHxfJvue/Z7Pr///////9cr+z///8+ouv///9Epepks+3l8vyr1vbb7vt+wPHY7PqBwfLI5Pn6/f////+93/id0PQ8oure7/uHxPHK5flDo+qv1/Z3vO/8/v89oOmPx/H////////////////9/v9Bourw+P1tt+9Kpur6/f7A4fn///////9csOyMx/Ly+f50u+7///////+o1fXp9fz///9UrOv///9Fpenw+P08oemez/NCo+qDw/GOyPKq1vb4+/73+/7P6Pp+wO+z2vbO5vnI5Pn6/f+i0fT///+KxvLo9Pz///////////////+co+0hAAAA/XRSTlPMbm1ebOn+AJrqb/Dw8H/k6erNAdkC98yWC1wDPAhncA/e5+nu9eU2ntSO0Obi/M7pndcI4ffhzDCnzf73Ie7f7+rY6/7OYvn9+ijeOZTF6P3UnPPtq+vt+v33JQZJqeYNkJFUYog/Ty6FE34kk9gIzwx0gSjURtXiObHrSOZFVrvu/K124PvSvXCZ5RrAddL0zOb0c2bqTCrw9/oz5+LZN3Xx0NHm1uNq9tb1X9C07+Jhm9MVWmjq1Pv1+trzd/T6UffibvTd183I8PuXlvU804L96vObz/X3xlWk8vvYEdXl+brRuM762MCb8d7G+f7a8Oja7vzkmN348VOFE37fxgAAAq1JREFUeNq91WVQFVEYh/EF9boHC0QQBATpBgEBaUQaRAFpsLu7u7u7u7u7u7G7O7D7P+PeWnbPXkDGGZ/Pv9k5c/Z9d5nSxerfuIHvjGkR2TP/jtvZh0LR/PiYInngEACzQ6aHzYoEXDdvLZz3t8bgyQ6MouXuufDyLYwPcMUgJ4Zvyz6cv1AwtwtAP0aYXxhCAwvinsPgzlCF4GZBfChsfGgeHolbmnmWNSoxkoJxUTPvCxtGWuW7uHrWcVF3Y5obYYxU13M2xCmWq5EpxUdqOMtqPXIHJ1hFTcTcAw60nqBHyGlsZJU1F3EvjKB5BULIBixT8XYNhXwcalG6G+FajAWsqhZCbo9gileT84mYpOblhXw8kjWchczBQFadiYCPHR7lJOaWnE5Fjeo8txAOQQ4aiLktxw9jKctnJuRxstx7Iu5NyGscrMlrR/EAX0LaEyF/QVLz8JLlayrmBk+RJrxMtw918YnNry21Tfcfw//hSbV+9lGG94n5uiq9fAYR0UBSuIofeQ68e/tKrbuYUTzuAXBsr2B4YzOAlNtK3bkTtU2HApBxnJr2N49wpb78hfbSpwZ4ZTp0fRi6a0m4fu7otoUW1HpMhWyFhvVwuXwDZ7jnjzbvKuRzo2WxElzRm3AZIiVRcTMdeO7pgXkS3dGWyNuxC0uUE9lazeOxxo/Wbs5EWZB/7d4K38pYyTPTo3YydC5E3RT0ZBWZ6yv4NyRLdHvC1ydPpho0UznP+qnhK2BJ8luFdUrezITj2fgh0T2IoCB+SVpy/De/GNSi8u3BeiWvwvEcfJdwWxHfjTpK3objRvgq4XoibqjmjTn+C18+JyRYWenqluIrx1WWq4y8AzLZ/hKK5IfRN0IRybaLRixm7SgdLS1t7ZJ82lxaXDryNmUW86/93/gfUrUfYeYz5KgAAAAASUVORK5CYII='},
                {'name':'收货地址','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAACYVBMVEU8oOnr9v3///9dr+z///+02/b1+v48oOlMaXE+oer///////+w2Pb///////9SquvP6Pqj0vQ9outjs+09oOnN5vpJpupHperJ5fmIxfHq9f1Tq+r1+v37/f+FxPE8ouo9oOk5quM9nuv///////////94vfA8ouz2+v683vb///9LqOr///////////9BoumAwfD///9Fo+n///+i0fT////////M5vn////////////Z7fv////5/P7n9PxEpOr8/f/X7PtQqepAoer////////W6/o+oOr///+22/b6/f////89oen///9ar+z////i8fz///9Fpen///9suO7////R6fpKpurI5Pn///////////8/oen////////F4/n///////9Ipur///9fsu3////f7/um1PR2vO////////////////////96v/D5/P74+/48oOk9oOk9ous9oOs+ouo9outApO0+oek8n+k8oupDpuk8oek9oOs9oOhAn+o8oOo8n+o9oOk+oOY8oOo9oes+oOmt1/Wr1vVDm+n///89oemp1vX////x+P3w+P3///////89oev///+k0/X///////////////////+x2fY9ouv///+g0fQ/o+r///////+z2vb///88oen////l8/zk8/y43Pb///89oeo+oeo8oOm43feKxvK93vf7/f6KxvH7/f673vd/wfE9oOl2vfByue9Lp+yCwvG83vf6/P71+v4/oek9oOm33feAwfF9wPHE4vj5/P/3+/4+oek9oOm63fe83/hPqOzA4fn///9iZfGJAAAAynRSTlOZ+DbT/uj7zABv+Prn0EjQ8OR+1IHvzs7u3fjR/P3cg4sJMoO4Ktld++v7z3kwU83bxs635McI7ww6JfNO/ffN/fLQzBfk8oRN6fyjjQ3ShPXWziTWN/DP7u4L6Mwe9u33G86a0/H15dkGlvLYvq/6+ed+ZYl4PxyAgHsXf4GGGINIiT6EZHTn5hdViuVB+vpQQI0h5CBY/T4955Ze4z1h+ehKREf29urRhV+M6arr+qX76rHMrayds/b79urq9bGx+Pn45+f395/3H62p5AAAAmlJREFUeNqV1FOXI1EYheHqpJKqSdu2bds9bds2xrZt27Zt7F81K0mfSp9Cr8x7+e1nrSQXOQwvbsxmfGpyYmJyatxmTDKKed/AEISGBvoW5e013cDwyOhgf//g6Mgw0F3Trsy77oDtUXNC6h4W1l1KvKkDtxo5qsab6GiS5w1taG7hRLU0o61BjlfVobWTk9TZiroqGV6B2npOpvpaVEh5NFtezclWXc5GS3gQrDiFrBAk5sEIi1TikWEIFvEohJt2T3s3N3tPTigcUSKejDhh9dECgNZHOMQhmeYpbF4uGR29YcjbkVxy89gUih+HBUeyw3x2wskCJymejkxh8yLcSzhlIp3iWUglkwuEXMgtFVkUP4N80ycTbfp++ThL8QzkCJuGcI1wykEGxdOQHUs2Vw+j9nAll9hspFGct0YIR7J11mtnW+EQAmue5oHQcKbU7u5qzpQGgSKuwuEETqGEQ1CJOB+PJCWehHhezA9CWyCvC7Q4KuF8IkoK5XRhCRJ5KS8qxlI5rkFxkQznVTrskeqL0Knk35l9Edgt1ifAXlZ6xWIscY7WB3D6gvIbecQSV+k/dcSpxV7gsisLf68GljGLP9jXdHhA9G3oyngJp7vRi2cG/OIRem14Oe6/cp2Dk++mbX7HKivvP3yKTz/n5n68xeMnd0tLd/hu2ei0Zu0Gh2XrCQ9gFvbmHX59/PAXM88ZqlWEh9L3zzP4/RWz0wzdcsJXiIYv34DvLxlRfvN8NSNuevb9K0bSZiPfKl3+vGakbTfyXYx57TRw//Nm8v0GHsCY2149DzWbX9Lze0vM7bqe/0//ABFbAFbwbB7gAAAAAElFTkSuQmCC'},
                {'name':'联系客服','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAABm1BMVEX2qDj3qDn5umH/zGb2qDv4qTj3qjxMaXH1qjz0pjn5umD/qlX/rUD6vmL//6r7uWP4uWH5umH/////yG35umH5uWH/xnH/u2b2qDn2pDfvn0D/v0D0qTj2qjn2pzn5pj3/tkn3pzn3pzn3qDr2rEX6uF73qTv5uWH2qz/5umL6u2H4r0r5uWH4umD4rkT5umL7vGL3qDj//4D4umD7tU7/w2n3qDn6umH/v0D3qDj4tVf4umD7umL5vGP5umD5uWH5umH5vmX5uWD/uXT5uWD6u2D5umH5uWH5umH5umD4uWH/v4D5umD4umD5uWH4uWH5uWD6u2L6umH6v2X4umD/wmH5vGT5vWH6uWH5umH4qTj7vGDxqjn5u2D4umH5vGT5uWD/u2b7vGL5umH6uWD/v2P5umD/1YD4umD5umH4uWD6u2T6uWT4umD4umD/qlX5qjn6umH4umH4qjn5u2D5umH4umD4u2P6umH5uWD5umH3qjr5umH5uWH/uWT5uWD/v3D/xmP4u2L/vGL5umD5umH/v2r4uWD3r0u75broAAAAh3RSTlPMuYEFOE0eADNI/gMcLwM+4/ABDtLYCQ+zHBAERBumLge3qddZbN/F4X1s3/KU2YVBewKXPhG4kQi16JxGUKp8XCvMC4dioP3779sI97n4+Pdt9zC8KldZbomIPRJ/ky75Hjl2jyTHBkr63zgz3sQGLYzgSFLI6Utn8alC86Uh0RAScCLP1RjMoYDOAAABNklEQVR42u3VVU8DURCG4bYLe2Ch3lLc3d3d3d3d3d3h42ez3TZN2D0DNOGCi75XM8kz16NjfvXvuWlsfGhyYkT4DTcamvuh1OmYWv6Bz4wCkCwDvYPDlg4AZxff8Ih5Cda82hbP1mM+OgfuHilu38finP3L/fMt3t75fGMd2wtM1csDnC4uX8XeEtP09IprHt+RtnYZp/srnHJ4HwyM2yUcNg03wuric+EYmxpegApGtIJ2DXfCTPE1dJlUvAy5xYyqG00qXogMRlaPRhXPRgnNG9Cq4gZk0bwNNT5uK0rS6/WZH2k0r0O1TMqnD2R+qHOXkp5K89KcfAXdyDxI5ymU5iFeEhzgAe4/982xNE/wkhOZVyYrY2Q0zRPjFVI1K3MWFiWKYngMrWUS5yaCn88mwP+MfwK0vWfdJLc+eAAAAABJRU5ErkJggg=='},
                {'name':'会员卡','path':'/','url':'data:image/png;base64,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'},
                {'name':'建议反馈','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAABUFBMVEVAyK1Ax6xHxqpBx66A//9V1apAya1MaXFAyK5Bya1AyK1FzrFGybJBya1AyK1AyK1Ax6xAyKxJ27ZAyK1AyKxAyqpAya1Aya1Ayq1AyK1AyKxAx6yF3Mv7/v266uBAyKxO2LFBya1Cy69Dya5AyK1Bya1Ayq9AxqtGxa5Ayq5AyK1AyK5A/7////9AzK5ByqxAyq9Aya1Bx61AyK1EzLBCya5ByK1Aya5Ay61AyK1ByKxAyK1AyKxVxqpAyK1ByK5Bya5CyqxAv6pL0rRAx65Aya1Ax61Bya1AyaxCyqy+6+OJ3sxIy7FXzrZVzrW+7OPN8Or5/fzM8OnX8+7W8+2U4NDl+PT8/v6Q389az7jj9/Pi9/Pv+vjs+vfr+vew6NxByK2z6d5Gyq+56+CB28i16t9My7FJy7GB2sh92sdSzbRHzK1Bya5AxqxDya7///+vcPsZAAAAb3RSTlPMoBJSAgacADxLqBohwbTDvKwHcG8Yyrhgx3iz3P3qyw3FNiarpTBMFki+kAQBPCtctzvGLVWxvERzU7u/CcRicWkMEVuYwKo0TevdzdHQ6u/97vLx3/b+3tH19fn4+OfM6M3p2+jOztva0BkvKDlttq/4AAABN0lEQVR42t3VxVIDQRCA4SbZ3UCUhLjj7q7B3d3drd//xmyzgS2KzXQuVIr/1Ifv0HOZBkdRlSIPRbVIGCxqcQ73mbkajIGkVtcXt5WBvMEGg6ukpXncnzwIvJyKzkMxYLak8yhw03SusXkmK3gE2L0JHubzd8GBX3np8r2z3TUaLpdP00Ad7ZwfWvD7A8QbmpKI+EjTBmJq9Xf+kEK8o+lW8Cea0ohb1xbLrBxvPwN1tX8B1PrmSbLIp/4fPs/nr4Iv8PmL4HG2TjgEX2TzKvo45pjaZyPu9vC43fj0enp5qxAXdXqluLrf9GGrXXUFcWW86cc5cNU0V+Sz15ttoqNWKXw92of839zPODZK40Cee2WcahvpNhaXcyowO6rzCQ6nxnNjABkep7JTPggwOTUzOf1XV/sDAnozHpHA+QcAAAAASUVORK5CYII='},
                {'name':'退出登录','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA5CAMAAACh+pM5AAABlVBMVEVMaXH8hob6hYX6hIT/////qqr6hYX5hYX6hob/mZn7hob5hYX6hIT6hYX/////h4f5hYX6hYX6hIT/hob6hYX5hYX6hob/qqr5hYX5hYX6hIT/iYn/jY36h4f6hob6hYX6hYX6hYX/jo75hYX6hIT6hIT6hYX6hYX6hIT/jIz5hYX/v7/6hYX7iIj8hob5hYX5hIT7hYX5h4f6hIT5hYX7iIj5hYX6hYX6hYX6hYX5hYX5hIT8hIT5hYX/iYn7hYX6hIT/h4f7hob/n5/6hob8hob6hYX6iIj6hIT5hYX7hYX6hYX/kpL6hYX7iIj6hYX8hYX6hYX6hob5hIT6h4f5h4f6hIT6hYX6hIT8hYX5hIT/ior/hYX6hYX6hIT/i4v5hYX7hob5hYX/h4f7hob7hYX6hYX5hIT/hob5hYX6hIT/mZn6hIT/lZX6hYX/h4f/hob6hIT6hYX5hIT6hIT8hIT5hIT6hYX7hob7hob6hIT7h4f6hYX7hYX5hIT5hYX7hob8hIT5hYX5hYX6hIT5hIT5hITboZ0NAAAAhnRSTlMAUP79Agb8gF8Feqs27gEkuJnvFcKyZQPVtvcNHTFpkPbECS7xnJ/s1BThBKM+TCzaRVvF3zzkyozPsKpNWCdDwyA5CF1KcS/QtEfGDvo6a0lik9YzV8HMokuDJRe8+RbldLEiO3OXtSaCvwrtDJsRKjjJ4nBRiY5+eL1G+Hfg4z1TVoRuh6zJEbMAAAIQSURBVHja7ZXXUxNAEMY3JMHEUEPvvVdRpAvSOyhVARuCFelVkab7d3vLBTaSXMkMDzzwe7m77+abudnd2wUVOYP+fYiYQUR0QKRECdcBRAoKHty77qrL/Tr5i1fnins/m5cFNyhFxIc6l0ecE9LgP/pRkKJzrZLQDME8iiZtQudyINELTHwsKSkubTQSScmMYSGDhPQsfQy9ySS1xEGARjrGxpsin1RJWgcE6KKTw5yvGPpz9VXy0IeCxzZZbiMxVe4LaF9j43pGoX4in+uk/NlVVAmpAzLpglo7Vw5elZBPbPIL7VzwVKgjlIZisRkCo4tT7awAKEJBrq2rneRJgGFau21d2SS/CATjua3LHSXDcYiCHlsXlAn5JUCeWPxg7SoXsk/tekfFo3QdK17Y8AabvileqI4GvB1IA2U0fnLkTXDkOctmOMuyoj6BBVxRXL1muHr5p5jhn8K/0gT/yiJFB2BUHYC7jRnuNtzZ9HBnU3RRRtNFuWNr4I6tmg6MejrwJGpd08zSH9eTiNlBonwZFCwWINEcMmGJ768gLB+3EXnCMu55vOTrJoRQ1yrvMkYhhJVoefeh0xssu8arnfJiL2y0hv0oKfZ56ioowusbM9VlKMlsgPB8XkJm7OT3L2SapkFJ5xaGJX0XtDjmMIQpj8vcUHKH8oMeetS/AHYUjp9NXJSU/v1zfjoKt8c/qqE55lYcsZ8AAAAASUVORK5CYII='},
                {'name':'关于我们','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAmVBMVEVjs+5ttu1isetjtO5mtO9Vqv9ltepMaXFjsu1jtO5ks+1ks+1js+9ktO6s1vZjs+5jtO5js+1ks+1jtO1ks+663vfG5Phjs+78/f7T6vqPyPJptu7l8v1mtO6Uy/Ov1/bE4/jH5PjG4/ir1var1vWEw/GEwvGo1fbx+P3y+f6v2PbE4viu2Pat1/bE4ffF4/iCwvGPyfL///9JQDT+AAAAMnRSTlPMDg2VQQMwAHSYrp7JmeHDS6yCgUrl6cL+7tjO9M3Z4enq6uDh1dXf+fni6OLh6enU2OsDOV4AAAEfSURBVHja5ZXHbsNADERHNZasZpW42+m98v8/LgkCBBxZXiI6Bcg7Eu/AXZBDnPyKP657bZOnZZnmTeuZephk+CFLQqceT9FjGh/VowkGmETDuh9gkMAf0v0ZjjDzD/UowFGC6ECnvlfL5Yr67+sxFNcLkcWNrsQ9nX6wk086+k/WQ2iKL72gUkh6As16I7JZUynRupeB2O52W65kntIrmFRKr229VnoO5r0o3sDkSk/BnItcgkmVXtp6qfQ5mAuRKzBz3Yytp46nnooUjqc2tt4ovbL11jEEryLPjiHojRjORPZcSXiALT10rAdeRJ44blzLh0eRByrEztXu7u9unattB8f4WLJDb3yk2oE9/hz08ar6+9jUlX1smP+sfwCMVC5b0TcdXwAAAABJRU5ErkJggg=='},
                {'name':'隐私政策','path':'/','url':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAAEgvhuhAAAABGdBTUEAALGPC/xhBQAABSlJREFUaAXlWEtsHEUQ7Rrbs5bBCBkcJRE4CESUCxL5EOWAIlCctQInLnDgI2+MfOB3AIPIJQdA/CQ4AAeEyK7JES6cQmzLMSDEJ+J3yAWQTJRIgLCcQIys3XHY4vWsa9I9O70zu15btrCUVFfVq9fVNd01O61U2l95Ypg1RqQXBXj0bDTGgLQiKNNxJQLW7qHxEKgBzggzun5cnhy+VVt5ZvR6y1uZLPxlGaAkzqGTsLIyo5yOKG9BVyaHf2JW20U31ya2SFYmCvPlqcJYZMAgXq1ohrjDDKqNaa57qLQpMdfczb3d9alwvw5MDKjMLpRRu/Ea81r+Hy1YJrUWTjTbnS/dIj5LaiB/XggXpR1ar8yM7hBQ3UJpf2lOnIq8MRUEX4peBxZHJOnKflneUYU/sQOj6SOgMTB2WWOgxCSmoVn0ExWQyESwduqnKSCRiWDsyA8EYMpEMCt+xAS1NK573Eks/MXh3mCx+hYz3av9ROqEf83VT9G+ty8l4cXWkLw8WZhTzGG/APBjJvVcSK7oNWa+rzZWF3ND431CaEoneXmiMIWNMAjwSTyqQ2aQjHG2TmCSQ1jKKWzoA2IXmVhw7cTS7whBHk0LOC5Z1XzIcHfcp3Urc/52tCu4EJxGR++D40Z0L8Isv5FibOf6P7g3oWxbkQig6jxiLvh9/l7a896SRneaIZX5IBA9fGVoBcEYbxW7LWuoMAmlBqANLHOESTvLYpPoMtEn+pjof3oc9yfpmckRHC0Gw2oSWdyWmRy74h4JRhnC/S66S1o1d4HEbvVTMTaQVuaoZakBNpOrHRzZJsqCwkl8CFvyeWyZ7ZA/k+e97h8sHk+LtQ5RHBxMF3ZVL/N3cbvonqJ9/lDpG9Hj0qq56eSZxzabxDiF9+d8v19LwVUVf80zj94gelw6d0slWPw9BJM6150f32YEfoQxoWOeRYm2VYLL57Vu+KOhM3NBxIjFrNAFb4oUxyCV3BGXybxxya0Hgf18FG/mkXDNrAa0xO740VUD9JjbQx8eeohVdCyXL70geIu82d4hJKbULVn0jVtz5yGSpYlELT10PLR1Jjyb9r4sNLGeSKRM2khmrjn/8mROE4lsRCq+zOSV2X90D1GVXxfOSXCazEyeRpTkz0yOzXsdvjffJyb7WzOJddmWebfg5Hr4cTEC2YDOdmXO3A7Lpq0qebYU/m+oqDu2unCeGLsqUPNHFPHjaO/XpvFgwktoIe/6PfQS3VlcSMO7/C0nHkwe3oP+eAq7vtdFnmbHR8ui10GDXYPFr9KwcX9LieOq5ziq+7BJhj58Bifmia586TPTbo6XJkb2V6n6DhZ8m2lH7Id4WTxg2tLGTSeOD/wjqPLLQgyCf6mT9voHSt+LLU0GUyM7maunsYCor+Ey5GguX3wxLVb8LbSV+GUDvdpM0npi/+CxH/A6e0WSCCXzg5aeojSfONEWkxP9ve5G0vS7xqy8vy0fqc2WnqI0n3gK4Vq5N2zizsOJdvdGlatPr1UFXfN45L3p54vPxP3Oiq+HpHWyrjycicdXuN701Umc1HQH0V05v2dLh9d5Nz7YnVeGrRYkegG0ShCP8zppd6yv/wHMp2k3KnGeNL3tFWfqrCRN6rInYbPY2p/40tIZ3OycNCfXOsNu2lY6bnviYUKsdtmJ8U5bX7m2OomvPK9UhrYfztqM3G9dA2X/UE1NWAAbtuLOxHED19KvPqlIu6QrD2fifo83gE+rIn7MXGxXEs3w6Hn1/DqPZuLWPfY/BeiZfI0nUE8AAAAASUVORK5CYII='}
            ]
        }
    }
    exit=(index)=>{
        if (index===7) {
            this.props.history.push('/login');
            localStorage.removeItem('token');
        }
    }
    render(){
        return(
            <div className='aways'>
                <div className='awaysLike'>
                    我猜你经常用
                </div>
                <ul className='awaysLikeList'>
                    {
                        this.state.aways.map((item,index)=>{
                            return<li className='awaysLikeItem' key={item.url+index}
                            onClick={()=>this.exit(index)}>
                                <img src={item.url} alt=''/>
                                <span>{item.name}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}