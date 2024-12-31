const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    getCampaigns,
    getCampaignById,
    createCampaign,
    updateCampaign,
    deleteCampaign,
    sendCampaignEmails,
    getCampaignMetrics
} = require('../controller/campaignController');

// Get all campaigns
router.get('/',  getCampaigns);

// Get a specific campaign by ID
router.get('/:id', getCampaignById);

// Create a new campaign
router.post('/',  createCampaign);

// Update an existing campaign
router.put('/:id',  updateCampaign);

// Delete a campaign
router.delete('/:id',  deleteCampaign);

// Send emails for a campaign
router.post('/:id/send', auth, sendCampaignEmails);

// Get performance metrics for a campaign
router.get('/:id/metrics', auth, getCampaignMetrics);

module.exports = router;
