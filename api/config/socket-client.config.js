/*
 * Copyright (c) 01/08/2022 06:12
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const io = require('socket.io-client');
module.exports = io(process.env.SOCKET_URI);
