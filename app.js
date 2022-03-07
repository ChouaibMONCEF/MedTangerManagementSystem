const express = require('express');
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

const userRoutes = require("./routes/user");
const typeRoutes = require("./routes/type");
const truckRoutes = require("./routes/truck");
const storageAreaRoutes = require("./routes/storageArea");
const shipOwnerRoutes = require("./routes/shipOwner");
const shipRoutes = require("./routes/ship");
const ruleRoutes = require("./routes/rule");
const roleRoutes = require("./routes/role");
const reservationRoutes = require("./routes/reservation");
const quayRoutes = require("./routes/quay");
const portRoutes = require("./routes/port");
const driverRoutes = require("./routes/driver");
const customFeeRoutes = require("./routes/customFee");
const containerRoutes = require("./routes/container");
const communicationRoutes = require("./routes/communication");
const categorieRoutes = require("./routes/categorie");
const blockPartRoutes = require("./routes/blockPart");
const blockRoutes = require("./routes/block");
const globalErrHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')
const app = express()

app.use(cors())
app.use(helmet())
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again later'
})
app.use('/api', limiter)

app.use(express.json({
    limit: '15kb'
}))

app.use(mongoSanitize())

app.use(xss())

app.use(hpp())

app.use('/api/users', userRoutes)
app.use("/api/types", typeRoutes);
app.use("/api/trucks", truckRoutes);
app.use("/api/storageAreas", storageAreaRoutes);
app.use("/api/shipOwners", shipOwnerRoutes);
app.use("/api/ships", shipRoutes);
app.use("/api/rules", ruleRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/quays", quayRoutes);
app.use("/api/ports", portRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/customFees", customFeeRoutes);
app.use("/api/containers", containerRoutes);
app.use("/api/communications", communicationRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/blockParts", blockPartRoutes);
app.use("/api/blocks", blockRoutes);

app.use('*', (req, res, next) => {
    const err = new AppError(404, 'Fail', 'Undefined route')
    next(err, req, res, next)
})

app.use(globalErrHandler)

module.exports = app