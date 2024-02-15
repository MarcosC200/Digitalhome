<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'digitalhome_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{ZjOTTc-xXO^=dmdUi`*i`~0ry:/N ,E>3;)CRra5dY*iUrR?/?-&589b5NPj5)G' );
define( 'SECURE_AUTH_KEY',  'L0Z+<Yz@DG`PGjE}WASo0KSnYCDW5$r ;Dac,Umztb8o]qL9SE:;%I;pos^ jvq4' );
define( 'LOGGED_IN_KEY',    'JUJRQXyWDWU)G&|:*m!81K.BenAd6f#aV.xCdBA7m2tRvGNp}>)~mHyorEiYjn[S' );
define( 'NONCE_KEY',        'qODTRzdx&!Z<jwq?|WZ_a_{e5V=qd sl47H[]5_c*L&1<le&3LP@F|@;3)V|A&YX' );
define( 'AUTH_SALT',        'ZQ@zUQ-.;5pi`^w$gWr9ft?TE6_xBfn0f*{,>|PUsj[}b#?Xlu9olyY`~V0]$]`;' );
define( 'SECURE_AUTH_SALT', '7gaR(47B;@_LtE+SIRN^4HSV+Cm6s<(t9;3rZ:bF~p 3s-qiw}8C`0$3|5$jl?<1' );
define( 'LOGGED_IN_SALT',   '.eoa2CLx696bgr04LY/]u{StpOU9.@c|HMD9L}@)Fw3&9[6|9MLS4igHb:$o~KSi' );
define( 'NONCE_SALT',       'l&&%QZUeTS&WJ$OaN@n<l`58qIwT[PI7A^ux7NiLa6rPS_Dt6UMBX6g(6v-01t;u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
