const express = require('express');
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')

const userRoutes = require("./routes/User");
const typeRoutes = require("./routes/Type");
const truckRoutes = require("./routes/Truck");
const storageAreaRoutes = require("./routes/StorageArea");
const shipOwnerRoutes = require("./routes/ShipOwner");
const shipRoutes = require("./routes/Ship");
const ruleRoutes = require("./routes/Rule");
const roleRoutes = require("./routes/Role");
const reservationRoutes = require("./routes/Reservation");
const quayRoutes = require("./routes/Quay");
const portRoutes = require("./routes/Port");
const driverRoutes = require("./routes/Driver");
const customFeeRoutes = require("./routes/CustomFee");
const containerRoutes = require("./routes/Container");
const communicationRoutes = require("./routes/Communication");
const categorieRoutes = require("./routes/Categorie");
const blockPartRoutes = require("./routes/BlockPart");
const blockRoutes = require("./routes/Block");
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