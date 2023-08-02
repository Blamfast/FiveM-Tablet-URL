local uiOpen = false

-- Commande pour ouvrir l'UI
RegisterCommand('openUI', function()
    openUI()
end)

-- Commande pour fermer l'UI
RegisterCommand('closeUI', function()
    closeUI()
end)

-- Fonction pour ouvrir l'UI
function openUI()
    SendNUIMessage({
        action = 'open'
    })
    SetNuiFocus(true, true)
    uiOpen = true
end

-- Fonction pour fermer l'UI
function closeUI()
    SendNUIMessage({
        action = 'close'
    })
    SetNuiFocus(false, false)
    uiOpen = false
end

RegisterNUICallback('closeUI', function(data, cb)
    closeUI()
    cb('ok')
end)
