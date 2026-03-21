import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AssetGallery.css';

// --- DATA STRUCTURE ---
const ASSET_TREE = {
    id: 'root',
    name: 'HOME',
    type: 'root',
    children: [
        {
            id: 'magazine-design',
            name: 'MAGAZINE DESIGN',
            type: 'folder',
            thumbnail: '/assets/magazine design/cover.png',
            children: [
                { type: 'image', src: '/assets/magazine design/cover.png', label: '' },
                { type: 'image', src: '/assets/magazine design/Document2.png', label: '' },
                { type: 'image', src: '/assets/magazine design/Document3.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock2.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock3.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock4.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock5.png', label: '' }
            ]
        },
        {
            id: 'business-cards',
            name: 'Business Cards',
            type: 'folder',
            thumbnail: '/assets/cards/mock1.png',
            children: [
                { type: 'image', src: '/assets/cards/florene_1.png', label: '' },
                { type: 'image', src: '/assets/cards/florene_3.png', label: '' },
                { type: 'image', src: '/assets/cards/mock1.png', label: '' },
                { type: 'image', src: '/assets/cards/mock2.png', label: '' },
                { type: 'image', src: '/assets/cards/mock3.png', label: '' },
                { type: 'image', src: '/assets/cards/mock4.png', label: '' },
                { type: 'image', src: '/assets/cards/g1.png', label: '' },
                { type: 'image', src: '/assets/cards/g2.png', label: '' },
                { type: 'image', src: '/assets/cards/m1.png', label: '' },
                { type: 'image', src: '/assets/cards/m2.png', label: '' },
                { type: 'image', src: '/assets/cards/m3.png', label: '' },
                { type: 'image', src: '/assets/cards/m4.png', label: '' },
                { type: 'image', src: '/assets/cards/ya_1.png', label: '' },
                { type: 'image', src: '/assets/cards/ya_2.png', label: '' },
                { type: 'image', src: '/assets/cards/yam1.png', label: '' },
                { type: 'image', src: '/assets/cards/yam2.png', label: '' },
            ]
        },
        {
            id: 'p-identity',
            name: 'PRODUCT IDENTITY & PACKAGING',
            type: 'folder',
            thumbnail: '/assets/product identity/m33.png',
            children: [
                { type: 'image', src: '/assets/product identity/m11.png', label: '' },
                { type: 'image', src: '/assets/product identity/m22.png', label: '' },
                { type: 'image', src: '/assets/product identity/m33.png', label: '' },
                { type: 'video', src: '/assets/product identity/m55.mp4', label: '' },
                { type: 'image', src: '/assets/product identity/1.png', label: '' },
                { type: 'image', src: '/assets/product identity/2.png', label: '' },
                { type: 'image', src: '/assets/product identity/3.png', label: '' },
                { type: 'image', src: '/assets/product identity/4.png', label: '' },
                { type: 'image', src: '/assets/product identity/5.png', label: '' },
                { type: 'image', src: '/assets/product identity/6.png', label: '' },
                { type: 'image', src: '/assets/product identity/7.png', label: '' },
                { type: 'image', src: '/assets/product identity/ok.png', label: '' },
                { type: 'image', src: '/assets/product identity/ok3.png', label: '' },
                
                
            ]
        },
        {
            id: 'p-cover',
            name: 'PODCAST COVER',
            type: 'folder',
            thumbnail: '/assets/pcover/pc2.png',
            children: [
                { type: 'image', src: '/assets/pcover/pc1.png', label: '' },
                { type: 'image', src: '/assets/pcover/pc2.png', label: '' }
                
            ]
        },
        {
            id: 'instagram-posts',
            name: 'INSTAGRAM POSTS',
            type: 'folder',
            thumbnail: '/assets/instagram posts/1 (2).png',
            children: [
                { type: 'image', src: '/assets/instagram posts/1 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/2 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/3 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/foodfair.png', label: '' },
                { type: 'image', src: '/assets/instagram posts/musicfest.png', label: '' }
            ]
        },
        {
            id: 'logos',
            name: 'LOGOS',
            type: 'folder',
            thumbnail: '/assets/logos/Gemini_Generated_Image_x9gp4jx9gp4jx9gp.png',
            children: [
                { type: 'image', src: '/assets/logos/Gemini_Generated_Image_x9gp4jx9gp4jx9gp.png', label: '' },
                { type: 'image', src: '/assets/logos/florene.png', label: '' }
            ]
        },
        {
            id: 'mockups',
            name: 'MOCKUPS',
            type: 'folder',
            thumbnail: '/assets/Mockups/1.png',
            children: [
                { type: 'image', src: '/assets/Mockups/1.png', label: '' },
                { type: 'image', src: '/assets/Mockups/2.png', label: '' },
                { type: 'image', src: '/assets/Mockups/3.png', label: '' },
                { type: 'image', src: '/assets/Mockups/5.png', label: '' },
                { type: 'image', src: '/assets/Mockups/6.png', label: '' },
                { type: 'image', src: '/assets/Mockups/7.png', label: '' },
                { type: 'image', src: '/assets/Mockups/8.png', label: '' },
                { type: 'image', src: '/assets/Mockups/10.png', label: '' },
                { type: 'image', src: '/assets/Mockups/13.png', label: '' },
                { type: 'image', src: '/assets/Mockups/14.png', label: '' }
            ]
        },
        {
            id: 'posters-promotional',
            name: 'POSTERS & PROMOTIONAL',
            type: 'folder',
            thumbnail: '/assets/posters%20and%20promostional/idxff2.png',
            children: [
                { type: 'image', src: '/assets/posters%20and%20promostional/idxff2.png', label: '1' },
                { type: 'video', src: '/assets/posters%20and%20promostional/Blue%20Modern%20Minimalist%20Fashion%20Coming%20Soon%20Instagram%20Story.mp4', label: '' },
                { type: 'video', src: '/assets/posters%20and%20promostional/White%20and%20Brown%20Modern%20Coming%20Soon%20Instagram%20Story.mp4', label: '' }
            ]
        },
        {
            id: 'UI',
            name: 'UI Design',
            type: 'folder',
            thumbnail: '/assets/chattergals_thumb.jpg',
            children: [
                { type: 'video', src: '/assets/UI/UII.mp4', label: '' }
            ]
        }
    ]
};

const AssetGallery = () => {
    const [navPath, setNavPath] = useState([ASSET_TREE]);
    const [selectedImage, setSelectedImage] = useState(null); // Lightbox State

    const currentView = navPath[navPath.length - 1];

    const handleNavigate = (node) => {
        if (node.children) {
            const newPath = [...navPath, node];
            setNavPath(newPath);
            const ids = newPath.map(n => n.id);
            window.history.pushState({ nav: ids }, '', `#gallery/${ids.join('/')}`);
        }
    };

    const handleBreadcrumbClick = (index) => {
        const newPath = navPath.slice(0, index + 1);
        setNavPath(newPath);
        const ids = newPath.map(n => n.id);
        window.history.pushState({ nav: ids }, '', `#gallery/${ids.join('/')}`);
    };

    const subFolders = currentView.children?.filter(c => c.type === 'category' || c.type === 'folder') || [];
    const files = currentView.children?.filter(c => c.type === 'image' || c.type === 'video' || c.type === 'pdf') || [];

    // Helper to rebuild navPath array from an array of ids
    const buildPathFromIds = (ids = []) => {
        if (!ids || ids.length === 0) return [ASSET_TREE];
        const path = [ASSET_TREE];
        let cursor = ASSET_TREE;
        for (let i = 1; i < ids.length; i++) {
            const nextId = ids[i];
            const child = cursor.children && cursor.children.find(c => c.id === nextId);
            if (!child) break;
            path.push(child);
            cursor = child;
        }
        return path;
    };

    useEffect(() => {
        // On mount, read hash or history.state to set initial nav
        const init = () => {
            const st = window.history.state;
            if (st && st.nav) {
                setNavPath(buildPathFromIds(st.nav));
                if (st.lightbox && st.image) setSelectedImage(st.image);
                return;
            }
            const hash = window.location.hash.replace(/^#/, '');
            if (hash.startsWith('gallery/')) {
                const ids = hash.replace('gallery/', '').split('/').filter(Boolean);
                if (ids.length > 0) setNavPath(buildPathFromIds(['root', ...ids]));
            }
        };

        init();

        const onPop = (ev) => {
            const st = ev.state;
            if (!st) {
                setNavPath([ASSET_TREE]);
                setSelectedImage(null);
                return;
            }
            if (st.nav) setNavPath(buildPathFromIds(st.nav));
            if (st.lightbox) setSelectedImage(st.image || null);
            else setSelectedImage(null);
        };

        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    return (
        <div className="gallery-container">
            <nav className="breadcrumb-nav">
                {navPath.map((node, index) => (
                    <React.Fragment key={node.id}>
                        <button
                            className={`crumb-btn ${index === navPath.length - 1 ? 'active' : ''}`}
                            onClick={() => handleBreadcrumbClick(index)}
                        >
                            {node.name}
                        </button>
                        {index < navPath.length - 1 && <span className="separator">/</span>}
                    </React.Fragment>
                ))}
            </nav>

            <div className="gallery-content">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentView.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="gallery-grid-wrapper"
                    >
                        {subFolders.length > 0 && (
                            <div className="folder-section">
                                {subFolders.map(folder => (
                                    <motion.div
                                        key={folder.id}
                                        className="folder-card"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavigate(folder)}
                                    >
                                        <div className="folder-thumb">
                                            {folder.thumbnail ? (
                                                        <img src={folder.thumbnail} alt={folder.name} loading="lazy" decoding="async" />
                                            ) : (
                                                <div className="empty-thumb">DIR_EMPTY</div>
                                            )}
                                            <div className="folder-tag">{folder.children?.length} ITEMS</div>
                                        </div>
                                        <div className="folder-label">{folder.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {files.length > 0 && (
                            <div className={`file-masonry ${currentView.id === 'UI' ? 'ui-section' : ''} ${currentView.id === 'magazine-design' ? 'magazine-section' : ''}`}>
                                {files.map((file, idx) => (
                                    <div key={idx} className={`file-card ${file.type === 'video' ? 'video-card' : ''} ${currentView.id === 'magazine-design' ? 'magazine-card' : ''}`}>
                                        {file.type === 'image' && (
                                            <img
                                                src={file.src}
                                                alt={file.label}
                                                loading="lazy"
                                                decoding="async"
                                                onClick={() => {
                                                    const ids = navPath.map(n => n.id);
                                                    window.history.pushState({ nav: ids, lightbox: true, image: file.src }, '', `#gallery/${ids.join('/')}/img`);
                                                    setSelectedImage(file.src);
                                                }}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                        {file.type === 'video' && <video src={file.src} controls />}
                                        {file.type === 'pdf' && (
                                            <a href={file.src} target="_blank" rel="noreferrer" className="pdf-link">
                                                PDF_DOC // {file.label}
                                            </a>
                                        )}
                                        {file.label && <div className="file-caption">{file.label}</div>}
                                    </div>
                                ))}
                            </div>
                        )}

                        {subFolders.length === 0 && files.length === 0 && (
                            <div className="empty-state">NO_DATA_FOUND_IN_SECTOR</div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* LIGHTBOX OVERLAY */}
            /* ... rest of the code stays the same ... */

{/* LIGHTBOX OVERLAY */}
            {/* LIGHTBOX OVERLAY */}
            {/* LIGHTBOX OVERLAY */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => window.history.back()}
                    >
                        <button className="close-lightbox" onClick={() => window.history.back()}>✕</button>
                        
                        <motion.div 
                            className="lightbox-image-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <img
                                src={selectedImage}
                                alt="Expanded view"
                                className="lightbox-img"
                                decoding="async"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

/* ... rest of the code stays the same ... */
        </div>
    );
};

export default AssetGallery;
