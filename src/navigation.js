import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function NaviagtionBottom() {
    const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
    const location = useLocation()

    useEffect(() => {}, [location])

    return (
        <div className="NavigationBottom_wrapper">
            <Link to="/home" onClick={() => forceUpdate()} className={window.location.pathname === "/home" ? "NavigationBottom_wrapper_selected" : ""}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1027.000000pt" viewBox="0 0 1280.000000 1027.000000" preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1027.000000) scale(0.100000,-0.100000)">
                    <path d="M3530 10174 c-1095 -673 -2073 -1528 -2680 -2344 -731 -983 -996 -1953 -770 -2817 224 -857 1024 -1661 2102 -2113 134 -56 158 -60 158 -24 0 7 -42 48 -92 91 -349 295 -642 568 -832 773 -178 193 -179 194 -315 369 -597 769 -774 1627 -509 2461 323 1013 1249 2167 2623 3265 180 144 455 353 490 372 14 8 14 14 4 36 -7 15 -15 27 -18 26 -3 0 -76 -43 -161 -95z"/>
                    <path d="M9040 10240 c-6 -11 -9 -24 -6 -29 3 -4 78 -61 167 -126 721 -528 1488 -1237 2006 -1857 459 -548 812 -1135 966 -1603 104 -314 135 -482 144 -766 13 -425 -62 -781 -249 -1179 -252 -534 -690 -1038 -1481 -1704 l-128 -108 -25 17 c-81 53 -154 163 -194 290 -102 326 35 940 378 1700 140 312 206 509 257 772 41 211 57 604 35 848 -62 670 -365 1385 -838 1979 -91 114 -457 494 -467 484 -3 -3 23 -54 56 -114 84 -150 214 -411 304 -608 475 -1050 596 -1968 369 -2801 -14 -49 -72 -229 -129 -400 -102 -304 -153 -486 -195 -694 -11 -58 -21 -106 -23 -107 -1 -1 -47 -35 -102 -77 -201 -151 -348 -299 -450 -452 -112 -169 -141 -252 -175 -512 -32 -243 -71 -373 -133 -440 -11 -13 -18 -26 -14 -29 3 -4 35 22 70 57 83 84 127 173 172 354 63 250 78 299 111 365 41 83 133 223 214 325 89 111 292 346 297 342 2 -2 -2 -49 -8 -103 -16 -131 -16 -408 0 -511 47 -318 179 -550 370 -652 31 -16 73 -32 93 -36 21 -4 42 -13 48 -20 14 -17 178 49 412 166 220 110 293 152 493 285 229 151 410 298 591 479 403 402 640 800 759 1275 46 186 59 300 59 535 0 345 -38 579 -150 920 -234 707 -676 1370 -1383 2075 -567 565 -1285 1123 -2001 1557 -223 135 -207 127 -220 103z"/>
                    <path d="M3085 8846 c-266 -250 -524 -583 -718 -926 -446 -792 -585 -1649 -392 -2429 51 -204 107 -361 215 -601 192 -427 330 -836 392 -1165 29 -156 31 -403 5 -510 -35 -138 -110 -260 -201 -328 l-41 -30 33 6 c103 20 257 145 331 270 71 121 122 289 142 474 12 108 7 360 -9 491 -5 34 -7 62 -6 62 8 0 266 -308 330 -392 83 -111 177 -266 200 -330 8 -24 33 -115 55 -203 51 -208 63 -244 112 -338 28 -54 56 -93 95 -127 63 -56 87 -66 47 -19 -64 77 -96 180 -129 421 -40 284 -62 352 -165 508 -117 179 -254 319 -476 487 l-80 60 -19 99 c-37 198 -89 386 -196 704 -155 465 -202 661 -231 974 -15 160 -6 556 15 716 92 676 362 1422 787 2176 17 30 27 54 22 54 -4 0 -57 -47 -118 -104z"/>
                    <path d="M4135 6800 c-206 -32 -456 -162 -605 -315 l-65 -66 85 52 c161 99 369 185 535 221 33 7 125 12 205 12 128 0 157 -3 245 -27 127 -35 272 -105 399 -191 96 -65 97 -66 67 -27 -115 146 -314 274 -496 321 -92 24 -279 34 -370 20z"/>
                    <path d="M8215 6791 c-123 -29 -228 -73 -326 -140 -57 -38 -169 -141 -210 -192 -31 -39 -31 -39 65 26 288 195 545 259 837 209 162 -28 403 -126 565 -229 137 -88 -16 59 -167 161 -184 123 -338 174 -549 179 -106 3 -152 0 -215 -14z"/>
                    <path d="M4226 6460 c-90 -15 -212 -57 -311 -108 l-90 -47 3 -60 c12 -220 111 -448 251 -577 73 -68 127 -100 226 -133 181 -61 408 -35 619 72 59 30 65 24 67 -62 0 -33 4 -82 8 -110 5 -43 8 -31 18 90 39 470 -158 829 -502 920 -76 20 -213 27 -289 15z"/>
                    <path d="M8385 6463 c-237 -33 -430 -189 -524 -424 -32 -80 -68 -241 -73 -329 -3 -65 12 -313 19 -306 3 2 9 53 13 111 5 59 11 109 13 111 2 2 39 -12 82 -31 151 -69 234 -88 380 -89 114 0 140 3 211 27 259 86 430 328 475 670 8 67 8 91 -1 102 -18 22 -187 101 -265 124 -118 34 -237 47 -330 34z"/>
                    <path d="M4133 3710 c-72 -198 -150 -488 -207 -765 -138 -679 -151 -1303 -35 -1775 125 -508 404 -823 803 -904 216 -44 560 1 802 104 l46 20 64 -60 c207 -194 537 -330 799 -330 264 0 595 136 797 328 l57 54 133 -45 c199 -68 331 -91 513 -91 123 0 166 4 240 23 387 99 649 404 770 895 50 205 67 350 72 635 10 470 -41 896 -168 1409 -47 194 -164 572 -175 572 -7 0 -2 -69 31 -425 72 -768 82 -1389 29 -1795 -84 -651 -306 -990 -701 -1072 -82 -17 -121 -19 -238 -15 -302 12 -604 96 -1102 308 -89 38 -165 69 -170 69 -12 0 161 -126 287 -209 63 -41 192 -115 285 -163 l170 -87 -130 -62 c-142 -67 -314 -127 -446 -156 -63 -13 -127 -18 -254 -18 -190 0 -255 11 -440 71 -120 39 -377 153 -381 169 -1 6 63 42 144 82 179 88 446 257 567 359 l30 25 -35 -14 c-19 -8 -111 -47 -205 -87 -518 -218 -909 -311 -1190 -280 -123 13 -185 30 -283 78 -86 42 -204 146 -264 235 -287 422 -349 1257 -202 2715 14 140 24 261 22 270 -2 10 -18 -21 -35 -68z"/>
                    <path d="M6115 2699 c-451 -46 -706 -191 -802 -456 -34 -95 -50 -244 -34 -330 33 -182 158 -372 347 -531 341 -286 751 -371 1150 -237 291 98 565 329 695 587 56 111 73 191 65 308 -23 373 -249 574 -727 646 -125 18 -561 27 -694 13z"/>
                    <path d="M4392 1728 c-28 -28 -3 -72 39 -66 30 4 47 33 33 56 -14 21 -55 27 -72 10z"/>
                    <path d="M8349 1716 c-15 -33 4 -58 39 -54 55 7 54 70 -1 76 -21 3 -30 -3 -38 -22z"/>
                    <path d="M4833 1669 c-49 -18 -30 -89 24 -89 26 0 50 38 40 64 -9 22 -39 35 -64 25z"/>
                    <path d="M5188 1668 c-30 -23 -27 -62 6 -83 48 -32 100 32 61 75 -21 23 -44 25 -67 8z"/>
                    <path d="M7560 1660 c-11 -11 -20 -26 -20 -33 0 -51 81 -68 102 -22 9 19 8 29 -6 50 -20 30 -49 32 -76 5z"/>
                    <path d="M7920 1650 c-22 -42 13 -80 60 -65 25 8 37 50 20 70 -19 22 -67 19 -80 -5z"/>
                    <path d="M8163 1389 c-34 -12 -32 -65 2 -81 21 -9 28 -8 45 7 39 35 1 93 -47 74z"/>
                    <path d="M4590 1371 c-20 -38 21 -82 59 -62 44 24 31 81 -19 81 -19 0 -33 -7 -40 -19z"/>
                    <path d="M4966 1329 c-36 -28 -36 -80 0 -108 15 -12 34 -21 44 -21 34 0 70 39 70 75 0 36 -36 75 -70 75 -10 0 -29 -9 -44 -21z"/>
                    <path d="M7755 1325 c-63 -63 18 -160 88 -105 35 28 37 80 5 110 -29 27 -64 25 -93 -5z"/>
                    <path d="M5302 1248 c-24 -31 -23 -57 2 -83 14 -14 32 -25 41 -25 28 0 67 48 59 73 -11 36 -25 47 -59 47 -18 0 -37 -6 -43 -12z"/>
                    <path d="M7425 1244 c-25 -25 -16 -75 17 -93 25 -14 29 -14 55 5 34 26 40 48 19 79 -19 29 -66 34 -91 9z"/>
                    <path d="M4753 1020 c-44 -18 -38 -91 7 -105 56 -18 96 66 48 99 -25 18 -25 18 -55 6z"/>
                    <path d="M8002 1014 c-42 -29 -17 -104 35 -104 20 0 53 38 53 60 0 22 -33 60 -53 60 -7 0 -23 -7 -35 -16z"/>
                    <path d="M5112 998 c-27 -27 -6 -68 35 -68 29 0 48 33 33 60 -12 22 -49 27 -68 8z"/>
                    <path d="M7642 1001 c-8 -4 -12 -21 -10 -37 2 -25 7 -29 32 -29 36 0 56 27 40 53 -13 19 -43 26 -62 13z"/>
                    </g>
                </svg>
            </Link>
            <Link to={"/search" } onClick={() => forceUpdate()} className={window.location.pathname === "/search" ? "NavigationBottom_wrapper_selected" : ""}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
                    <path d="M4470 11700 c-1261 -110 -2368 -843 -2959 -1961 -414 -785 -529 -1723 -315 -2584 237 -951 844 -1771 1688 -2278 1121 -673 2523 -695 3659 -59 119 67 333 204 402 258 l30 24 1965 -1964 c1529 -1528 1977 -1970 2020 -1994 199 -110 430 -72 600 98 169 169 208 403 98 599 -24 44 -466 492 -1994 2021 l-1964 1965 24 30 c54 69 189 279 257 400 427 762 564 1652 388 2517 -115 570 -355 1077 -740 1567 -103 131 -411 441 -539 543 -570 452 -1194 718 -1890 803 -150 19 -583 27 -730 15z m592 -925 c953 -101 1780 -684 2192 -1545 115 -241 187 -467 231 -725 135 -793 -71 -1588 -574 -2212 -96 -120 -295 -318 -414 -413 -412 -329 -897 -529 -1432 -591 -137 -16 -456 -16 -595 0 -529 60 -1024 266 -1440 597 -109 87 -327 305 -414 414 -311 390 -508 848 -583 1355 -25 171 -25 593 0 755 51 330 131 585 269 862 323 647 891 1142 1573 1372 193 66 426 116 620 135 145 14 419 12 567 -4z"/>
                    </g>
                </svg>
            </Link>
        </div>
    )

}

export default NaviagtionBottom;